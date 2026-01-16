const questions = [
  {
    "id": "L01",
    "category": "light",
    "question": "매일 아침 10분 일찍 일어나기 vs 매일 10분 늦게 자기",
    "options": ["10분 일찍 일어나기", "10분 늦게 자기"]
  },
  {
    "id": "L02",
    "category": "light",
    "question": "평생 내가 쓰는 모든 글씨체가 궁서체 되기",
    "options": ["상관없다", "절대 안된다"]
  },
  {
    "id": "L03",
    "category": "light",
    "question": "모든 음식을 케첩에 찍어먹기 vs 마요네즈에 찍어먹기",
    "options": ["케첩", "마요네즈"]
  },
  {
    "id": "L04",
    "category": "light",
    "question": "지금부터 평생 양치 안 하기 vs 평생 세수 안 하기",
    "options": ["양치 안 하기", "세수 안 하기"]
  },
  {
    "id": "L05",
    "category": "light",
    "question": "핸드폰 자동완성 기능 없이 살기 vs 오타 자동교정 없이 살기",
    "options": ["자동완성 없이", "자동교정 없이"]
  },
  {
    "id": "L06",
    "category": "light",
    "question": "내가 가는 모든 노래방 첫 곡은 애국가",
    "options": ["YES", "NO"]
  },
  {
    "id": "L07",
    "category": "light",
    "question": "카톡 메시지 보낼 때 10초 딜레이 생기기",
    "options": ["감수한다", "못한다"]
  },
  {
    "id": "L08",
    "category": "light",
    "question": "평생 여름만 있는 나라 vs 평생 겨울만 있는 나라",
    "options": ["여름", "겨울"]
  },
  {
    "id": "L09",
    "category": "light",
    "question": "길 가다가 100만원 줍기 vs 10년 전으로 돌아가기",
    "options": ["100만원 줍기", "10년 전으로 돌아가기"]
  },
  {
    "id": "L10",
    "category": "light",
    "question": "내일 당장 좀비 세상 열리기",
    "options": ["오히려 좋아", "끔찍하다"]
  },
  {
    "id": "L11",
    "category": "light",
    "question": "사람들 머리 위로 레벨이 보이기",
    "options": ["재밌겠다", "피곤할 듯"]
  },
  {
    "id": "L12",
    "category": "light",
    "question": "딱 한 가지 초능력, 순간이동 vs 투명인간",
    "options": ["순간이동", "투명인간"]
  },
  {
    "id": "L13",
    "category": "light",
    "question": "다시 태어난다면 원하는 성별로 태어나기",
    "options": ["YES", "NO"]
  },
  {
    "id": "L14",
    "category": "light",
    "question": "모든 알림음이 방귀소리로 바뀌기",
    "options": ["괜찮다", "미쳤다"]
  },
  {
    "id": "L15",
    "category": "light",
    "question": "평생 같은 옷만 입기 vs 평생 같은 신발만 신기",
    "options": ["같은 옷", "같은 신발"]
  },
  {
    "id": "L16",
    "category": "light",
    "question": "1년 동안 매일 같은 메뉴 먹고 1억 받기",
    "options": ["한다", "안한다"]
  },
  {
    "id": "L17",
    "category": "light",
    "question": "내 모든 SNS 계정이 내 의지와 상관없이 삭제된다면?",
    "options": ["오히려 좋아", "절대 안돼"]
  },
  {
    "id": "L18",
    "category": "light",
    "question": "영화관에서 가장 거슬리는 사람",
    "options": ["스포일러", "폰딧불이"]
  },
  {
    "id": "L19",
    "category": "light",
    "question": "인생 BGM을 하나 고른다면?",
    "options": ["신나는 댄스곡", "감성 발라드"]
  },
  {
    "id": "L20",
    "category": "light",
    "question": "내 장례식에 틀고 싶은 노래 장르",
    "options": ["클래식", "아이돌 댄스곡"]
  },
  {
    "id": "S01",
    "category": "spicy",
    "question": "친구가 내 애인에게 '한입만' 시전",
    "options": ["가능", "불가능"]
  },
  {
    "id": "S02",
    "category": "spicy",
    "question": "애인이 내 가장 친한 친구와 단둘이 술 마시기",
    "options": ["쿨하게 OK", "절대 NO"]
  },
  {
    "id": "S03",
    "category": "spicy",
    "question": "친구의 애인이 나에게만 따로 고민 상담",
    "options": ["받아준다", "선을 긋는다"]
  },
  {
    "id": "S04",
    "category": "spicy",
    "question": "더 정떨어지는 애인의 술버릇",
    "options": ["했던 말 계속 반복하기", "갑자기 울기"]
  },
  {
    "id": "S05",
    "category": "spicy",
    "question": "친구에게 100만원 빌려주기 vs 보증 서주기",
    "options": ["100만원 빌려주기", "보증 서주기"]
  },
  {
    "id": "S06",
    "category": "spicy",
    "question": "내 애인의 전 애인과 친구 먹기",
    "options": ["가능", "불가능"]
  },
  {
    "id": "S07",
    "category": "spicy",
    "question": "애인의 핸드폰, 궁금하면 몰래 본다 vs 안 본다",
    "options": ["본다", "안 본다"]
  },
  {
    "id": "S08",
    "category": "spicy",
    "question": "나 빼고 다 아는 내 애인의 비밀",
    "options": ["알려줘", "모르는 게 약"]
  },
  {
    "id": "S09",
    "category": "spicy",
    "question": "절친이 내 뒷담화 한 걸 알게 됐다",
    "options": ["바로 손절", "모른 척한다"]
  },
  {
    "id": "S10",
    "category": "spicy",
    "question": "연인 사이, 방귀는 트는 게 좋다 vs 절대 안된다",
    "options": ["트는 게 좋다", "절대 안된다"]
  },
  {
    "id": "S11",
    "category": "spicy",
    "question": "헤어진 연인과 친구가 될 수 있다?",
    "options": ["YES", "NO"]
  },
  {
    "id": "S12",
    "category": "spicy",
    "question": "썸 탈 때 더 최악인 행동",
    "options": ["읽씹", "안읽씹"]
  },
  {
    "id": "S13",
    "category": "spicy",
    "question": "친구가 내 옷 스타일을 똑같이 따라 입는다",
    "options": ["기분 나쁘다", "상관없다"]
  },
  {
    "id": "S14",
    "category": "spicy",
    "question": "팀플할 때 더 싫은 사람",
    "options": ["연락두절", "시키는 것만 함"]
  },
  {
    "id": "S15",
    "category": "spicy",
    "question": "단톡방에서 내 생일만 아무도 축하 안 해줬을 때",
    "options": ["서운함 티 낸다", "조용히 넘어간다"]
  },
  {
    "id": "S16",
    "category": "spicy",
    "question": "데이트 비용, 무조건 더치페이 vs 능력 있는 사람이 더 내기",
    "options": ["무조건 더치페이", "능력 따라"]
  },
  {
    "id": "S17",
    "category": "spicy",
    "question": "내 애인이 주는 선물, 더 싫은 건?",
    "options": ["쓸모없는 비싼 선물", "필요하지만 싼 선물"]
  },
  {
    "id": "S18",
    "category": "spicy",
    "question": "이성친구가 나에게만 '사랑해'라고 카톡 보냈을 때",
    "options": ["'나도'라고 보낸다", "정색한다"]
  },
  {
    "id": "S19",
    "category": "spicy",
    "question": "더 참을 수 없는 배신",
    "options": ["친구가 내 비밀을 퍼뜨림", "애인이 바람핌"]
  },
  {
    "id": "S20",
    "category": "spicy",
    "question": "결혼식에 전 애인 부르기 vs 내가 가기",
    "options": ["내 결혼식에 부르기", "전 애인 결혼식 가기"]
  },
  {
    "id": "D01",
    "category": "danger",
    "question": "지금 이 자리에서 가장 먼저 집에 가고 싶어할 것 같은 사람",
    "options": ["내 왼쪽 사람", "내 오른쪽 사람"]
  },
  {
    "id": "D02",
    "category": "danger",
    "question": "여기 있는 사람 중, 연애하면 가장 피곤할 스타일",
    "options": ["이 질문을 읽고 있는 나", "사회자"]
  },
  {
    "id": "D03",
    "category": "danger",
    "question": "오늘 술값 내줬으면 하는 사람",
    "options": ["가장 돈 많아 보이는 사람", "가장 먼저 취한 사람"]
  },
  {
    "id": "D04",
    "category": "danger",
    "question": "지금 술자리에서 딱 한 명, 어색한 사람이 있다",
    "options": ["YES", "NO"]
  },
  {
    "id": "D05",
    "category": "danger",
    "question": "다시 돌아간다면, 지금 내 옆 사람과 절대 안 친해진다",
    "options": ["YES", "NO"]
  },
  {
    "id": "D06",
    "category": "danger",
    "question": "이 중에 한 명과 사귈 수 있다면?",
    "options": ["차라리 혼자가 낫다", "조용히 눈을 감는다"]
  },
  {
    "id": "D07",
    "category": "danger",
    "question": "솔직히 오늘 이 자리에 나오기 싫었다",
    "options": ["YES", "NO"]
  },
  {
    "id": "D08",
    "category": "danger",
    "question": "여기서 딱 한 명이랑만 친구 할 수 있다면, 그 사람은?",
    "options": ["내 맞은편 사람", "내 옆 사람"]
  },
  {
    "id": "D09",
    "category": "danger",
    "question": "이 중에서 비밀이 가장 많아 보이는 사람",
    "options": ["가장 말이 없는 사람", "가장 말이 많은 사람"]
  },
  {
    "id": "D10",
    "category": "danger",
    "question": "지금 당장 이 자리에서 한 명을 집에 보낼 수 있다면?",
    "options": ["가장 신난 사람", "가장 피곤해 보이는 사람"]
  }
];

// In a real app, this would come from a backend, but for now, it's a client-side utility.
class QuestionService {
    getQuestions(category) {
        if (category === 'random') {
            return this.shuffleArray([...questions]);
        }
        if (category === 'today') {
            // Simple logic for "Question of the Day": use the day of the year
            const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
            return [questions[dayOfYear % questions.length]];
        }
        const filtered = questions.filter(q => q.category === category);
        return this.shuffleArray(filtered);
    }

    getQuestionById(id) {
        // Use == to allow string/number comparison, as URL params are strings
        return questions.find(q => q.id == id);
    }

    // Fisher-Yates shuffle
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

export const questionService = new QuestionService();

