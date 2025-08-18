interface Props {
  params: {
    organizationId: string;
  };
}

const OrganizationIdPage = ({ params }: Props) => {
  return <div>{params.organizationId}</div>;
};

export default OrganizationIdPage;
