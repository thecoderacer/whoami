export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
};

export const certifications: Certification[] = [
  {
    name: "Basic REST API with Golang",
    issuer: "Alterra Academy",
    date: "Mar 2022",
    credentialId: "059/SER/RAPI/III/2022",
  },
  {
    name: "Basic Unit Testing with Golang",
    issuer: "Alterra Academy",
    date: "Feb 2022",
    credentialId: "246/SER/BUTG/II/2022",
  },
];
