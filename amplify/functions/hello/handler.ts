import type { Handler } from "aws-lambda";
import { Schema } from "../../data/resource";

type HandlerType = Schema["sayHello"]["functionHandler"];

export const handler: HandlerType = async (event, context) => {
  const { name } = event.arguments;
  return `Hello ${name}`;
};
