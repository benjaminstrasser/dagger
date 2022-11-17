import Client, {connect} from "@dagger.io/dagger"


connect(async (client:  Client) => {
  const ctr = client
    .container()
    .from("node")
    .withEntrypoint(["cowsay"])

  const result = await ctr.exec(["Hello"]).stdout().contents()

  console.log(result.contents)
})
