// é ã á

const livros = [
    /*{
        titulo: "",
        autor: "",
        categoria: "",
        tags: ["", ""],
        tipo: "",
        dificuldade: "",
        capa: "",
        link:
    },*/

    {
        titulo: "Confissão IBAL",
        autor: "Washington Santana",
        categoria: "Confissão",
        tags: ["confissão", "batista", "ibal"],
        tipo: "Confissão",
        dificuldade: "Fácil",
        capa: "../src/LIVRO-Pilares da Verdade.pdf.jpg",
        link: "../biblioteca/confissoes/confissao-da-ibal/confissao-ibal.html"
    },

    {
        titulo: "Confissão Batista de 1689",
        autor: "Batistas particulares",
        categoria: "Confissão",
        tags: ["confissão", "batista", "londres"],
        tipo: "Confissão",
        dificuldade: "Médio",
        capa: "https://images.tcdn.com.br/img/img_prod/1222859/confissao_de_fe_batista_de_londres_de_1689_2a_edicao_305_1_961457df5930da06dc74fa82a54d5e80.jpg",
        link: "../biblioteca/confissoes/confissao-batista-de-1689/1689.htm"
    },

    {
        titulo: "Confissão de fé de Westminster",
        autor: "Puritanos",
        categoria: "Confissão",
        tags: ["confissão", "puritanos", "presbiteriano"],
        tipo: "Confissão",
        dificuldade: "Médio",
        capa: "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-confissao-de-fe-westminster-assembleia-de-westminster-1033857.jpg",
        link: "../biblioteca/confissoes/westminster/cfw.html"
    },

    {
        titulo: "A Arte Expositiva de João Calvino",
        autor: "Steven J. Lawson",
        categoria: "Teologia Pastoral",
        tags: ["pregação", "calvino", "exposição bíblica"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://imgv2-1-f.scribdassets.com/img/document/518946668/original/cfeceba3b0/1?v=1",
        link: "../biblioteca/livros/a-arte-expositiva-de-joao-calvino.pdf"
    },

    {
        titulo: "A Palavra Final",
        autor: "O. Palmer Robertson",
        categoria: "Dons Espirituais",
        tags: ["cessacionismo", "línguas", "profecia"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://imgv2-1-f.scribdassets.com/img/document/275003595/original/27c711458b/1?v=1",
        link: "../biblioteca/livros/a-palavra-final-resposta-biblica.pdf"
    },

    {
        titulo: "A Reprovação Reafirmada",
        autor: "John Bunyan",
        categoria: "Soteriologia",
        tags: ["reprovação", "predestinação", "calvinismo"],
        tipo: "Livro",
        dificuldade: "Avançado",
        capa: "../src/capas/Reprovação Reafirmada-capa.png",
        link: "../biblioteca/livros/a-reprovacao-reafirmada.pdf"
    },

    {
        titulo: "A Verdadeira Doutrina da Justificação",
        autor: "Prima Pars",
        categoria: "Soteriologia",
        tags: ["justificação", "salvação", "doutrina"],
        tipo: "Livro",
        dificuldade: "Avançado",
        capa: "../src/capas/A Verdadeira Doutrina da Justificação-capa.png",
        link: "../biblioteca/livros/a-verdadeira-doutrina-da-justificacao.pdf"
    },

    {
        titulo: "Calvinismo",
        autor: "Abraham Kuyper",
        categoria: "Teologia Reformada",
        tags: ["calvinismo", "kuyper", "reforma"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://images.dlivros.org/Abraham-Kuyper/calvinismo-abraham-kuyper_large.webp",
        link: "../biblioteca/livros/calvinismo-abraham-kuyper.pdf"
    },

    {
        titulo: "A resposta do Calvinismo para o Problema do Mal",
        autor: "Stephen Charnock",
        categoria: "Teodiceia",
        tags: ["calvinismo", "problema do mal", "soberania"],
        tipo: "Livro",
        dificuldade: "Avançado",
        capa: "../src/capas/A resposta do Calvinismo para o Problema do Mal-capa.png",
        link: "../biblioteca/livros/a-resposta-do-calvinismo-para-o-problema-do-mal.pdf"
    },

    {
        titulo: "Calvino - O Teólogo do Espírito Santo",
        autor: "Augustos Nicodemus",
        categoria: "Pneumatologia",
        tags: ["espírito santo", "calvino", "nicodemus"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://imgv2-2-f.scribdassets.com/img/document/407357089/149x198/dbfe0cec4a/1716444814?v=1",
        link: "../biblioteca/livros/calvino-o-teologo-do-espirito-santo.pdf"
    },

    {
        titulo: "Comentário Bíblico de Matthew Henry",
        autor: "Matthew Henry",
        categoria: "Comentário Bíblico",
        tags: ["comentário", "matthew henry", "bíblia"],
        tipo: "Comentário",
        dificuldade: "Médio",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PgLMMY6IaMy1ghxWGffz8jLLXTwxTHtTVA&s",
        link: "../biblioteca/livros/comentario-biblico-matthew-henry.pdf"
    },

    {
        titulo: "Compêndio Sistemático da Ciência Metafísica",
        autor: "Keckermann",
        categoria: "Filosofia Cristã",
        tags: ["metafísica", "filosofia", "escolástica"],
        tipo: "Livro",
        dificuldade: "Avançado",
        capa: "../src/capas/Compêndio Sistemático da Ciência Metafísica-capa.png",
        link: "../biblioteca/livros/compendio-metafisica-keckermann.pdf"
    },

    {
        titulo: "Da Providência Divina",
        autor: "Melchior Leydekker",
        categoria: "Doutrina de Deus",
        tags: ["providência", "soberania", "doutrina de deus"],
        tipo: "Livro",
        dificuldade: "Avançado",
        capa: "https://imgv2-2-f.scribdassets.com/img/document/860281545/149x198/80a16bbdbd/1746988433?v=1",
        link: "../biblioteca/livros/da-providencia-divina.pdf"
    },

    {
        titulo: "Fides Reformata Vol. XXX n.1",
        autor: "Revista Fides Reformata",
        categoria: "Artigos Teológicos",
        tags: ["fides reformata", "teologia reformada", "artigos"],
        tipo: "Revista",
        dificuldade: "Médio",
        capa: "https://cpaj.mackenzie.br/fileadmin/ARQUIVOS/Public/50-outros/cpaj/2021/Capa_fides_formatadas/Capa_Vol._30_page-0001.jpg",
        link: "../biblioteca/livros/fides-reformata-vol-30-n1.pdf"
    },

    {
        titulo: "Fides Reformata Vol. XXX n.2",
        autor: "Revista Fides Reformata",
        categoria: "Artigos Teológicos",
        tags: ["fides reformata", "teologia reformada", "artigos"],
        tipo: "Revista",
        dificuldade: "Médio",
        capa: "https://cpaj.mackenzie.br/fileadmin/_processed_/9/7/csm_Fides_v30_n2_capa_web_PB_fe06a8ca86.jpg",
        link: "../biblioteca/livros/fides-reformata-vol-30-n2.pdf"
    },

    {
        titulo: "Julgamento sobre a Remonstrância",
        autor: "Pareus",
        categoria: "Soteriologia",
        tags: ["remonstrância", "arminianismo", "calvinismo"],
        tipo: "Livro",
        dificuldade: "Avançado",
        capa: "../src/capas/Julgamento sobre a Remonstrancia-capa.png",
        link: "../biblioteca/livros/julgamento-sobre-a-remonstrancia.pdf"
    },

    {
        titulo: "O Calvinismo Explicado Vol. 1",
        autor: "Desconhecido",
        categoria: "Teologia Reformada",
        tags: ["calvinismo", "doutrina reformada", "introdução"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://www.topleituras.com/livros/calvinismo-explicado-vol-1-teontologia-providencia-decretos-c53a-capa.jpg",
        link: "../biblioteca/livros/o-calvinismo-explicado-vol1.pdf"
    },

    {
        titulo: "O Foco Evangélico de Charles Spurgeon",
        autor: "STEVEN J. LAWSON",
        categoria: "Teologia Pastoral",
        tags: ["spurgeon", "evangelho", "pregação"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "../src/capas/O foco evangelico de Charles Spurgeon-capa.jpg",
        link: "../biblioteca/livros/o-foco-evangelico-charles-spurgeon.pdf"
    },

    {
        titulo: "O Sufrágio Colegiado dos Teólogos da Grã-Bretanha",
        autor: "Teólogos da Grã-Bretanha",
        categoria: "História da Igreja",
        tags: ["teólogos", "grã-bretanha", "história reformada"],
        tipo: "Documento",
        dificuldade: "Avançado",
        capa: "../src/capas/O Sufrágio Colegiado dos Teólogos da Grã-Bretanha-capa.png",
        link: "../biblioteca/livros/o-sufragio-colegiado.pdf"
    },

    {
        titulo: "Santos no Mundo - Os Puritanos Como Realmente Eram",
        autor: "Leland Ryken",
        categoria: "Puritanismo",
        tags: ["puritanos", "santificação", "vida cristã"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://imgv2-1-f.scribdassets.com/img/document/630970556/original/1ee8f03f3b/1?v=1",
        link: "../biblioteca/livros/santos-no-mundo-os-puritanos-como-realmente-eram.pdf"
    },

    {
        titulo: "Teses Sobre Graça e Livre Arbítrio",
        autor: "John Cameron",
        categoria: "Soteriologia",
        tags: ["graça", "livre-arbítrio", "salvação"],
        tipo: "Livro",
        dificuldade: "Avançado",
        capa: "../src/capas/Teses Sobre Graça e Livre Arbítrio-capa.png",
        link: "../biblioteca/livros/teses-sobre-a-eficacia-da-graca.pdf"
    },

    {
        titulo: "Breve Tratado sobre a Ceia do Senhor",
        autor: "João Calvino",
        categoria: "Sacramentos",
        tags: ["ceia do senhor", "eucaristia", "sacramentos"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://imgv2-1-f.scribdassets.com/img/document/776731532/original/41572b6f7e/1?v=1",
        link: "../biblioteca/livros/breve-tratado-sobre-a-ceia-do-senhor.pdf"
    },

    {
        titulo: "Uma Dissertação sobre Jonathan Edwards",
        autor: "Carlos Eduardo Marques",
        categoria: "História da Teologia",
        tags: ["jonathan edwards", "teologia", "história"],
        tipo: "Livro",
        dificuldade: "Médio",
        capa: "https://m.media-amazon.com/images/I/51k85afq3HL._AC_SX148_SY213_QL70_.jpg",
        link: "../biblioteca/livros/uma-dissertacao-sobre-jonathan-edwards.pdf"
    }
]