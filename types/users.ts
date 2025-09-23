type Adress = {
  strees: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
  
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Users = {
  id: number;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;

};
export default Users;