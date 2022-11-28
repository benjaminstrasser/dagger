import logger from "node-color-log"

export const log = (title: string, message: string) =>
  logger
    .bgColor("red")
    .color("white")
    .bold()
    .log(title)
    .bgColor("red")
    .color("white")
    .log(message)
