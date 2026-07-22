const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require('docx');

// Ensure directories exist
const kitDir = path.join(__dirname, '../public/kit-temp');
if (!fs.existsSync(kitDir)) {
  fs.mkdirSync(kitDir, { recursive: true });
}

async function createDoc(title, bodyText) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: title,
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: bodyText,
              size: 24, // 12pt
            })
          ],
          spacing: { line: 360 },
          alignment: AlignmentType.JUSTIFIED,
        }),
        new Paragraph({
          text: "Local e Data: ________________________________________________",
          spacing: { before: 800, after: 400 },
        }),
        new Paragraph({
          text: "_____________________________________________________________",
          spacing: { before: 400, after: 100 },
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: "Assinatura do Servidor",
          alignment: AlignmentType.CENTER,
        })
      ],
    }],
  });
  return await Packer.toBuffer(doc);
}

async function generateKit() {
  console.log("Generating Word documents...");
  
  const doc1 = await createDoc(
    "REQUERIMENTO DE LICENÇA-PRÊMIO", 
    "Eu, [NOME COMPLETO], servidor(a) público(a) municipal, matrícula nº [MATRÍCULA], lotado(a) no [ÓRGÃO/SECRETARIA], venho respeitosamente à presença de V. Sa. requerer o gozo de minha Licença-Prêmio por assiduidade referente ao quinquênio [ANO INÍCIO] a [ANO FIM], com base na Lei Municipal vigente, sugerindo o período de [DATA INÍCIO] a [DATA FIM]."
  );
  fs.writeFileSync(path.join(kitDir, '1_Requerimento_Licenca_Premio.docx'), doc1);

  const doc2 = await createDoc(
    "RECURSO ADMINISTRATIVO - ESTÁGIO PROBATÓRIO", 
    "Eu, [NOME COMPLETO], matrícula nº [MATRÍCULA], venho interpor o presente RECURSO ADMINISTRATIVO contra a nota atribuída na minha Avaliação Especial de Desempenho, com base no princípio da motivação dos atos administrativos e ampla defesa. A avaliação carece de elementos objetivos que comprovem qualquer desídia de minha parte, conforme provas anexas."
  );
  fs.writeFileSync(path.join(kitDir, '2_Recurso_Estagio_Probatorio.docx'), doc2);

  const doc3 = await createDoc(
    "REQUERIMENTO DE ADICIONAL DE INSALUBRIDADE", 
    "Eu, [NOME COMPLETO], matrícula nº [MATRÍCULA], exercendo a função de [CARGO] no setor [SETOR], venho requerer a realização de perícia técnica (LTCAT) in loco para fins de concessão de Adicional de Insalubridade, tendo em vista a exposição permanente a agentes nocivos, conforme determina o estatuto."
  );
  fs.writeFileSync(path.join(kitDir, '3_Requerimento_Insalubridade.docx'), doc3);

  console.log("Documents created at public/kit-temp");
}

generateKit();
