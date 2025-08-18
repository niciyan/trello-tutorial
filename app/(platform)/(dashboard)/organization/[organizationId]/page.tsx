interface Props {
  params: {
    organizationId: string;
  };
}

const OrganizationIdPage = ({ params }: Props) => {
  return <div>organization: {params.organizationId}</div>;
};

export default OrganizationIdPage;
