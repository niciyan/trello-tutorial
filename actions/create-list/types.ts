import { z } from "zod";
import { List } from "@/lib/generated/prisma";

import { ActionState } from "@/lib/create-safe-action";
import { CreateList } from "./schema";

export type InputType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputType, List>;
