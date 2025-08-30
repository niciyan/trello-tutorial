import { z } from "zod";
import { List } from "@/lib/generated/prisma";

import { ActionState } from "@/lib/create-safe-action";
import { UpdateListOrder } from "./schema";

export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, List[]>;
