function buildCard(result) {
  var indicatorsText = '';

  if (result.indicators && result.indicators.length > 0) {
    indicatorsText = '• ' + result.indicators.join('<br>• ');
  } else {
    indicatorsText = 'No clear scam indicators detected.';
  }

  return CardService.newCardBuilder()
    .setHeader(
      CardService.newCardHeader()
        .setTitle('Scam Risk: ' + result.risk_score + '%')
    )
    .addSection(
      CardService.newCardSection()
        .addWidget(
          CardService.newTextParagraph()
            .setText(
              '<b>Type:</b> ' + result.scam_type + '<br><br>' +
              '<b>Why:</b><br>' + indicatorsText
            )
        )
    )
    .build();
}
