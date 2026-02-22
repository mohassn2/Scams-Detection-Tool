function onGmailMessageOpen(e) {
  
  if (!e || !e.gmail || !e.gmail.messageId) {
    return CardService.newCardBuilder()
      .setHeader(
        CardService.newCardHeader()
          .setTitle("Scams Detection Tool")
          .setSubtitle("Open an email in Gmail to analyze it")
      )
      .build();
  }

  const messageId = e.gmail.messageId;

  const message = Gmail.Users.Messages.get("me", messageId, {
    format: "full"
  });

  const body = extractEmailBody(message.payload);

  const result = analyzeWithVertex(body);
  return buildCard(result);
}

