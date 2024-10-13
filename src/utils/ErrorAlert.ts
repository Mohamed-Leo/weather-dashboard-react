import { IErrorAlertProps } from "@/interfaces";
import Swal from "sweetalert2";

function ErrorAlert({ icon, title, text, footer }: IErrorAlertProps) {
	Swal.fire({
		icon,
		title,
		text,
		footer,
	});
}

export default ErrorAlert;
