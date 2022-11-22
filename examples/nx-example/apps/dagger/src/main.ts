import Client, {connect} from "@dagger.io/dagger"
import * as api from "../../api/dagger"

// initialize Dagger client
connect(async (client: Client) => {
  await api.build(client);
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
