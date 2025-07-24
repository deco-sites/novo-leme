import { invoke } from "../runtime.ts";

export interface Props {
  name: string;
  email: string;
  message: string;
}

export default async function sendContactEmail({ name, email, message }: Props) {
  try {
    console.log("Attempting to send email with data:", { name, email, message: message.substring(0, 50) + "..." });

    // Send email using the configured Resend app
    const result = await invoke["deco-resend"].actions.emails.send({
      to: ["augustocbarbosa@gmail.com"], // Using the configured email
      subject: `Nova mensagem de contato de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nova mensagem de contato</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Nome:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <strong>Mensagem:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 4px solid #007bff;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              Esta mensagem foi enviada através do formulário de contato do site LemeLab.
            </p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
              Para responder, utilize o email: ${email}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", result);

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve."
    };
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Return more specific error information
    let errorMessage = "Erro ao enviar mensagem. Tente novamente mais tarde.";
    
    if (error.message?.includes("API key")) {
      errorMessage = "Erro de configuração do serviço de email. Entre em contato pelo email diretamente.";
    } else if (error.message?.includes("domain")) {
      errorMessage = "Erro de domínio do email. Entre em contato pelo email diretamente.";
    }
    
    return {
      success: false,
      message: errorMessage,
      error: error.message
    };
  }
}