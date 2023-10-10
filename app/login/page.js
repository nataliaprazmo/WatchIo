import { Nav } from "@/components";
import { LoginContainer } from "./LoginContainer";

export default function Login() {
	return (
		<main>
			<Nav main={false} />
			<LoginContainer />
		</main>
	);
}
