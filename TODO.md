# Recuperação de senha
**RF** => Requisitos funcionais
- O usuário deve poder recuperar sua senha informando seu email;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- o usuário deve poder resetar sua senha

**RNF** => Requisitos não funcionais
- Utilizar mailtrap para testar envios de e-mail em desenvolvimento;
- Utilizar o Amazon SES para envio em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN** => Regras de negócios
- o link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisar confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF** => Requisitos funcionais
 - O usuário deve poder atualizar seu nome, email e senha;

**RN** => Regras de negócios
 - O usuário não pode alterar seu email para um email já utilizado;
 - Para atualizar sua senha, o suário deve informr a senha antiga;
 - Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF** => Requisitos funcionais
 - O usuário deve poder listar seus agendamentos de um dia específico;
 - O prestador deve poder receber uma notificação sempre que houver um novo agendamento;
 - O prestador deve poder visualizar as notificações não lidas;

**RNF** => Requisitos não funcionais
 - Os agendamentos do prestador no dia devem ser armazenados em cache;
 - As notificações do prestador devem ser armazenadas no MongoDB;
 - As notificaçõs do prestador devems er enviadas em tempo-real utilizando Socket.io;

**RN** => Regras de negócios
 - A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços
**RF** => Requisitos funcionais
 - O usuário deve poder listar todos os prestadores de serviço cadrastados;
 - O usuário deve popder listar os dias de um mês com pelo um horário disponível de um prestador;
 - O usuário deve poder listar horários disponíveis de um dia específico de um prestador;
 - O usuário deve poder realizar um novo agendamento com um prestador;

**RNF** => Requisitos não funcionais
- A listagem de prestadores devem ser armazenadas em cache;
-

**RN** => Regras de negócios
- Cada agendamento deve duar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8g às 12h (Primeiro  às 8h, último às 17H);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
