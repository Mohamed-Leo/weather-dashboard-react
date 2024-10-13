import Swal from "sweetalert2";

interface IErrorAlertProps {
  icon: "success" | "error" | "warning" | "info" | "question";
  title: string;
  text?: string;
  footer?: string;
}

function ErrorAlert({ icon, title, text, footer }: IErrorAlertProps) {
  Swal.fire({
    icon,
    title,
    text,
    footer,
  });
}

export default ErrorAlert;
