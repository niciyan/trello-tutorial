import { db } from "@/lib/db";
import { DeleteBoard } from "./board";
import Form from "./form";

interface Props {
  params: {
    organizationId: string;
  };
}

const OrganizationIdPage = async ({ params }: Props) => {
  const boards = await db.board.findMany();
  return (
    <div>
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <DeleteBoard title={board.title} id={board.id} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
