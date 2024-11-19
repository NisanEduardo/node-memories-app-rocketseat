import { fastify } from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./rouutes/memories";

const app = fastify();

app.register(cors, {
	origin: ["http://localhost:3000", "outraurldeproducaodofrontend"],
});
app.register(memoriesRoutes);

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("server rodando perfeitamente");
	});
