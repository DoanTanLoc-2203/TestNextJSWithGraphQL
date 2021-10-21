import { gql, useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useState } from "react";
const ALLUSER = gql`
  query {
    Users {
      id
      name
      age
      schoolID {
        name
        address
      }
    }
  }
`;

const ALLSCHOOL = gql`
  query {
    Schools {
      id
      name
      address
    }
  }
`;

interface UserProps {
  Users: {
    id: number;
    name: string;
    age: string;
    schoolID: {
      id: number;
      name: string;
      address: string;
    };
  }[];
}
interface SchoolProps {
  Schools: {
    id: number;
    name: string;
    address: string;
  }[];
}

const ListUser = ({ query }: { query: DocumentNode }) => {
  const { data, loading, error } = useQuery<UserProps>(query);
  const [click, setclick] = useState(false);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      {data?.Users.map((ele, index) => {
        return (
          <div key={index}>
            <h3>USER ID: {ele.id}</h3>
            <p>Name: {ele.name}</p>
            <p>Age: {ele.age}</p>
            <button
              onClick={() => {
                setclick(!click);
              }}>
              Get School
            </button>
            {click ? (
              <div>
                <h3>USER ID: {ele.schoolID.id}</h3>
                <p>Name: {ele.schoolID.name}</p>
                <p>Age: {ele.schoolID.address}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

const ListSchool = ({ query }: { query: DocumentNode }) => {
  const { data, loading, error } = useQuery<SchoolProps>(query);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      {data?.Schools.map((ele, index) => {
        return (
          <div key={index}>
            <h3>School ID: {ele.id}</h3>
            <p>Name: {ele.name}</p>
            <p>Address: {ele.address}</p>
          </div>
        );
      })}
    </div>
  );
};

function HomePage() {
  const [query, setquery] = useState<DocumentNode>(ALLUSER);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setquery(ALLUSER);
          }}>
          Get All User
        </button>
        <button
          onClick={() => {
            setquery(ALLSCHOOL);
          }}>
          Get ALL School
        </button>
      </div>
      <div>
        <h2>Result</h2>
        {query === ALLUSER ? (
          <ListUser query={query} />
        ) : (
          <ListSchool query={query} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
