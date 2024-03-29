import lessonsLearned from '../images/projects/LessonsLearned.png';
import pixelArt from '../images/projects/PixelArt.png';
import pixelArt2 from '../images/projects/PixelArt2.png';
import technologies from './TechnologiesData';
import toDoList from '../images/projects/toDoList.png';
import toDoList2 from '../images/projects/toDoList2.png';
import solarSystem from '../images/projects/solar.png';
import solarSystem2 from '../images/projects/system.png';
import TrybeTunes from '../images/projects/TrybeTunes.png';
import TrybeTunes2 from '../images/projects/TrybeTunes2.png';
import TrybeTunes3 from '../images/projects/TrybeTunes3.png';
import TrybeTunes4 from '../images/projects/TrybeTunes4.png';
import trybewarts from '../images/projects/Trybewarts.png';
import trybewarts2 from '../images/projects/Trybewarts2.png';
import trybeWallet from '../images/projects/trybeWallet2.png';
import trybeWallet2 from '../images/projects/trybeWallet4.png';
import tryunfo from '../images/projects/tryunfo.png';
import tryunfo2 from '../images/projects/tryunfo2.png';
import shoppingCart from '../images/projects/shoppingCart.png';
import onlineStore from '../images/projects/OnlineStore.png';
import onlineStore2 from '../images/projects/OnlineStore2.png';
import onlineStore3 from '../images/projects/OnlineStore3.png';
import trivia from '../images/projects/Trivia.png';
import trivia2 from '../images/projects/trivia2.png';
import recipes from '../images/projects/recipes.png';
import recipes2 from '../images/projects/recipes2.png';
import hackaton from '../images/projects/hackaton.png';
import hackaton2 from '../images/projects/hackaton2.png';
import delivery from '../images/projects/Deliery.png';

const devProjects = [
  {
    id: 1,
    name: 'Delivery App',
    tags: ['Em Grupo','Full-Stack'],
    members: 'Yasmin Amorin, Tiago de Barros, Vinícius Barbosa, Breno Araújo',
    technologies: [technologies[0], technologies[1], technologies[2], technologies[3],
    technologies[11]],
    image: [{ id: 1, image: delivery}],
    about: '',
    resume: 'Um aplicativo de Delivery de Bebidas.',
    link: 'https://delivery-app-project.up.railway.app/login',
    repository: 'https://github.com/Yasmin358/trybe-project-delivery-app',
    duration: '20/01/2023 - 14/02/2023',
    dateBegin: '20/01/2023',
    dateEnd: '31/01/2023',
    favorite: true,
  }
]

const bestProjects = [
  {
    id: 1,
    name: 'Rifa Virtual - Hackaton',
    tags: ['Em Grupo','Front-End'],
    members: 'Yasmin Amorin, Patricia Correia, Mathews Rodrigues,  Sally Barzilai Diament' ,
    technologies: [technologies[0], technologies[1], technologies[3], 
    technologies[7]],
    image: [{ id: 1, image: hackaton }, { id: 2, image: hackaton2 }],
    about: '',
    resume: 'Um site onde você pode ajudar uma ONG e ganhar um premio ao mesmo tempo, através de um sorteio.', 
    link: 'https://rifa-virtual-project.vercel.app/',
    repository: 'https://github.com/Yasmin358/rifa-virtual-project',
    duration: '10/12/2022 a 11/12/2022',
    dateBegin: '10/12/2022',
    dateEnd: '11/12/2022',
    favorite: true,
    status: 'finalizado',
  },
  {
    id: 9,
    name: 'Online Store',
    tags: ['Em Grupo','Front-End'],
    members: 'Yasmin Amorin, Leonardo C Araújo, Harumi Maeda, Leandro Coelho, Thiago Viana',
    technologies: [technologies[0], technologies[1], technologies[2], technologies[3]],
    image: [{ id: 1, image: onlineStore }, { id: 2, image: onlineStore2 }, { id: 3, image: onlineStore3 }],
    about: '',
    resume: 'Loja Online de compras que usa a API do Mercado Livre',
    link: 'https://trybe-project-frontend-online-store-4cue5tk1n-yasmin358.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-frontend-online-store',
    duration: '07/07/2022 a 19/07/2022',
    dateBegin: '07/07/2022',
    dateEnd: '12/07/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 8,
    name: 'TrybeTunes',
    tags: ['Individual', 'Front-End'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1], technologies[2], technologies[3]],
    image: [{ id: 1, image: TrybeTunes }, { id: 2, image: TrybeTunes2 }, { id: 3, image: TrybeTunes3 }, { id: 4, image: TrybeTunes4 }],
    resume: 'Site para ouvir as mais variadas musicas que usa a API do Itunes',
    link: 'https://trybe-project-trybetunes-one.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-trybetunes',
    duration: '01/07/2022 a 12/07/2022',
    dateBegin: '04/07/2022',
    dateEnd: '12/07/2022',
    favorite: true,
    status: 'finalizado',
  },
];

const projects = [
  
  {
    id: 12,
    name: 'Recipes App',
    tags: ['Em Grupo','Front-End'],
    members: 'Yasmin Amorin, Anderson Correa, Eliel Oliveira, Ricardo Caselati',
    technologies: [technologies[0], technologies[1], technologies[3], technologies[2], 
    technologies[5]],
    image: [{ id: 1, image: recipes }, { id: 2, image: recipes2 }],
    about: '',
    resume: 'App de Receitas onde é possivel ver, buscar, filtrar, favoritar e acompanhar o progresso da preparação de comidas e bebidas.',
    link: 'https://trybe-projec-recipes-app.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-projec-recipes-app',
    duration: '19/08/2022 a 12/09/2022',
    dateBegin: '19/08/2022',
    dateEnd: '29/08/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 11,
    name: 'Trivia',
    tags: ['Em Grupo','Front-End'],
    members: 'Yasmin Amorin, Thiago Oliveira, João Roberto',
    technologies: [technologies[0], technologies[1], technologies[3], technologies[2],
    technologies[4], technologies[5]],
    image: [{ id: 1, image: trivia }, { id: 2, image: trivia2 }],
    about: '',
    resume: 'Um jogo de perguntas e respostas baseado no jogo Trivia',
    link: 'https://trybe-project-trivia.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-trivia',
    duration: '05/08/2022 a 18/08/2022',
    dateBegin: '05/08/2022',
    dateEnd: '18/08/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 10,
    name: 'TrybeWallet',
    tags: ['Individual','Front-End'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1], technologies[3], technologies[2], 
    technologies[4], technologies[5]],
    image: [{ id: 1, image: trybeWallet }, { id: 2, image: trybeWallet2 }],
    about: '',
    resume: 'Uma carteira digital de controle de gastos com conversor de moedas',
    link: 'https://trybe-project-trybewallet-flax.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-trybewallet',
    duration: '28/07/2022 a 10/08/2022',
    dateBegin: '28/07/2022',
    dateEnd: '10/08/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 7,
    name: 'Tryunfo',
    tags: ['Individual','Front-End'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1], technologies[3], technologies[2]],
    image: [{ id: 1, image: tryunfo }, { id: 2, image: tryunfo2 }],
    about: '',
    resume: 'Site inspirado no jogo de cartas Super Trunfo',
    link: 'https://trybe-project-tryunfo.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-tryunfo',
    duration: '24/06/2022 a 05/07/2022',
    dateBegin: '27/06/2022',
    dateEnd: '02/07/2022',
    favorite: true,
    status: 'Parcialmente Finalizado',
  },
  {
    id: 6,
    name: 'Solar System',
    tags: ['Individual', 'Front-End'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1], technologies[3], technologies[2]],
    image: [{ id: 1, image: solarSystem }, { id: 2, image: solarSystem2 }],
    about: '',
    resume: 'Um site contendo dados sobre as viagens ao sistema solar',
    link: 'https://trybe-project-solar-system-chi.vercel.app/',
    repository: 'https://github.com/Yasmin358/trybe-project-solar-system',
    duration: '21/06/2022 a 28/06/2022',
    dateBegin: '21/06/2022',
    dateEnd: '27/06/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 5,
    name: 'Shopping Cart',
    tags: ['Individual', 'Front-End'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1], technologies[2], technologies[6]],
    image: [{ id: 1, image: shoppingCart }],
    about: '',
    resume: 'Um site de compras que usa a API do Mercado Livre',
    link: 'https://yasmin358.github.io/Trybe/ShoppingCart/',
    repository: 'https://github.com/Yasmin358/Yasmin358.github.io/tree/main/Trybe/ShoppingCart',
    duration: '03/06/2022 a 23/06/2022',
    dateBegin: '03/06/2022',
    dateEnd: '14/06/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 4,
    name: 'Trybewarts',
    tags: ['Em Dupla', 'Fundamentos'],
    members: 'Yasmin Amorin e Crisna Bezerra',
    technologies: [technologies[0], technologies[1], technologies[2] ],
    image: [{ id: 1, image: trybewarts }, { id: 2, image: trybewarts2 }],
    about: '',
    resume: 'Uma página de formulário de feedback da Escola de Magia Trybewarts', 
    link: 'https://yasmin358.github.io/Trybe/Trybewarts/',
    repository: 'https://github.com/Yasmin358/Yasmin358.github.io/tree/main/Trybe/TrybeWartss',
    duration: '05/05/2022 a 12/05/2022',
    dateBegin: '05/05/2022',
    dateEnd: '10/05/2022',
    favorite: false,
    status: 'finalizado',
  },
  {
    id: 3,
    name: 'To Do List',
    tags: ['Individual', 'Fundamentos'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1], technologies[2]],
    image: [{ id: 1, image: toDoList2 }, { id: 2, image: toDoList }],
    about: '',
    resume: 'Um site para criar uma lista de afazeres',
    link: 'https://yasmin358.github.io/Trybe/ToDoList/',
    repository: 'Indisponivel',
    duration: 'Projeto Bônus, desenvolvido no meu tempo livre',
    dateBegin: '25/04/2022',
    dateEnd: '18/06/2022',
    favorite: true,
    status: 'finalizado',
  },
  {
    id: 2,
    name: 'Pixel Art',
    tags: ['Individual', 'Fundamentos'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1], technologies[2]],
    image: [{ id: 1, image: pixelArt }, { id: 2, image: pixelArt2 }],
    about: '',
    resume: 'Um site para criar desenhos em Pixeal Art',
    link: 'https://yasmin358.github.io/Trybe/PixelsArt/',
    repository: 'Indisponivel',
    duration: '20/04/2022 - 04/05/2022',
    dateBegin: '20/04/2022',
    dateEnd: '25/04/2022',
    favorite: true,
    status: 'finalizado',
  },
  {
    id: 1,
    name: 'Lessons Learned',
    tags: ['Individual', 'Fundamentos'],
    members: 'Yasmin Amorin',
    technologies: [technologies[0], technologies[1]],
    image: [{ id: 1, image: lessonsLearned }],
    about: '',
    resume: 'Um site contendo informações sobre o que aprendemos'
      + ' na Trybe ao longo dos primeiros blocos do modulo de fundamentos.',
    link: 'https://yasmin358.github.io/Trybe/LessonsLearned/',
    repository: 'Indisponivel',
    duration: '05/04/2022 a 12/04/2022',
    dateBegin: '05/04/2022',
    dateEnd: '11/04/2022',
    favorite: false,
    status: 'finalizado',
  },
];

export {projects, bestProjects, devProjects};
