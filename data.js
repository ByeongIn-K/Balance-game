const questions = [
  {
    "id": "L01",
    "category": "light",
    "text": {
      "ko": "매일 아침 10분 일찍 일어나기 vs 매일 10분 늦게 자기",
      "en": "Wake up 10 minutes early every morning vs. Go to bed 10 minutes late every day"
    },
    "options": [
      {
        "id": "L01_1",
        "text": {
          "ko": "10분 일찍 일어나기",
          "en": "Wake up 10 minutes early"
        }
      },
      {
        "id": "L01_2",
        "text": {
          "ko": "10분 늦게 자기",
          "en": "Go to bed 10 minutes late"
        }
      }
    ]
  },
  {
    "id": "L02",
    "category": "light",
    "text": {
      "ko": "평생 내가 쓰는 모든 글씨체가 궁서체 되기",
      "en": "All your handwriting becomes a formal script for the rest of your life"
    },
    "options": [
      {
        "id": "L02_1",
        "text": {
          "ko": "상관없다",
          "en": "I don't mind"
        }
      },
      {
        "id": "L02_2",
        "text": {
          "ko": "절대 안된다",
          "en": "Absolutely not"
        }
      }
    ]
  },
  {
    "id": "L03",
    "category": "light",
    "text": {
      "ko": "모든 음식을 케첩에 찍어먹기 vs 마요네즈에 찍어먹기",
      "en": "Eat all food with ketchup vs. Eat all food with mayonnaise"
    },
    "options": [
      {
        "id": "L03_1",
        "text": {
          "ko": "케첩",
          "en": "Ketchup"
        }
      },
      {
        "id": "L03_2",
        "text": {
          "ko": "마요네즈",
          "en": "Mayonnaise"
        }
      }
    ]
  },
  {
    "id": "L04",
    "category": "light",
    "text": {
      "ko": "지금부터 평생 양치 안 하기 vs 평생 세수 안 하기",
      "en": "Never brush your teeth again vs. Never wash your face again"
    },
    "options": [
      {
        "id": "L04_1",
        "text": {
          "ko": "양치 안 하기",
          "en": "No brushing"
        }
      },
      {
        "id": "L04_2",
        "text": {
          "ko": "세수 안 하기",
          "en": "No washing face"
        }
      }
    ]
  },
  {
    "id": "L05",
    "category": "light",
    "text": {
      "ko": "핸드폰 자동완성 기능 없이 살기 vs 오타 자동교정 없이 살기",
      "en": "Live without autocomplete vs. Live without autocorrect"
    },
    "options": [
      {
        "id": "L05_1",
        "text": {
          "ko": "자동완성 없이",
          "en": "Without autocomplete"
        }
      },
      {
        "id": "L05_2",
        "text": {
          "ko": "자동교정 없이",
          "en": "Without autocorrect"
        }
      }
    ]
  },
  {
    "id": "L06",
    "category": "light",
    "text": {
      "ko": "내가 가는 모든 노래방 첫 곡은 애국가",
      "en": "The first song at every karaoke you go to is the national anthem"
    },
    "options": [
      { "id": "L06_1", "text": { "ko": "YES", "en": "YES" } },
      { "id": "L06_2", "text": { "ko": "NO", "en": "NO" } }
    ]
  },
  {
    "id": "L07",
    "category": "light",
    "text": {
      "ko": "카톡 메시지 보낼 때 10초 딜레이 생기기",
      "en": "A 10-second delay when sending a chat message"
    },
    "options": [
      {
        "id": "L07_1",
        "text": {
          "ko": "감수한다",
          "en": "I can live with it"
        }
      },
      {
        "id": "L07_2",
        "text": {
          "ko": "못한다",
          "en": "I can't"
        }
      }
    ]
  },
  {
    "id": "L08",
    "category": "light",
    "text": {
      "ko": "평생 여름만 있는 나라 vs 평생 겨울만 있는 나라",
      "en": "A country with only summer vs. A country with only winter"
    },
    "options": [
      { "id": "L08_1", "text": { "ko": "여름", "en": "Summer" } },
      { "id": "L08_2", "text": { "ko": "겨울", "en": "Winter" } }
    ]
  },
  {
    "id": "L09",
    "category": "light",
    "text": {
      "ko": "길 가다가 100만원 줍기 vs 10년 전으로 돌아가기",
      "en": "Find $1000 on the street vs. Go back in time 10 years"
    },
    "options": [
      {
        "id": "L09_1",
        "text": {
          "ko": "100만원 줍기",
          "en": "Find $1000"
        }
      },
      {
        "id": "L09_2",
        "text": {
          "ko": "10년 전으로 돌아가기",
          "en": "Go back 10 years"
        }
      }
    ]
  },
  {
    "id": "L10",
    "category": "light",
    "text": {
      "ko": "내일 당장 좀비 세상 열리기",
      "en": "The zombie apocalypse starts tomorrow"
    },
    "options": [
      {
        "id": "L10_1",
        "text": {
          "ko": "오히려 좋아",
          "en": "Sounds great"
        }
      },
      {
        "id": "L10_2",
        "text": {
          "ko": "끔찍하다",
          "en": "That's terrible"
        }
      }
    ]
  },
  {
    "id": "L11",
    "category": "light",
    "text": {
      "ko": "사람들 머리 위로 레벨이 보이기",
      "en": "You can see people's levels above their heads"
    },
    "options": [
      {
        "id": "L11_1",
        "text": {
          "ko": "재밌겠다",
          "en": "Would be fun"
        }
      },
      {
        "id": "L11_2",
        "text": {
          "ko": "피곤할 듯",
          "en": "Would be tiring"
        }
      }
    ]
  },
  {
    "id": "L12",
    "category": "light",
    "text": {
      "ko": "딱 한 가지 초능력, 순간이동 vs 투명인간",
      "en": "One superpower: Teleportation vs. Invisibility"
    },
    "options": [
      { "id": "L12_1", "text": { "ko": "순간이동", "en": "Teleportation" } },
      { "id": "L12_2", "text": { "ko": "투명인간", "en": "Invisibility" } }
    ]
  },
  {
    "id": "L13",
    "category": "light",
    "text": {
      "ko": "다시 태어난다면 원하는 성별로 태어나기",
      "en": "If you were born again, you could be born as the gender you want"
    },
    "options": [
      { "id": "L13_1", "text": { "ko": "YES", "en": "YES" } },
      { "id": "L13_2", "text": { "ko": "NO", "en": "NO" } }
    ]
  },
  {
    "id": "L14",
    "category": "light",
    "text": {
      "ko": "모든 알림음이 방귀소리로 바뀌기",
      "en": "All your notification sounds are replaced with fart sounds"
    },
    "options": [
      {
        "id": "L14_1",
        "text": {
          "ko": "괜찮다",
          "en": "It's fine"
        }
      },
      {
        "id": "L14_2",
        "text": {
          "ko": "미쳤다",
          "en": "You're crazy"
        }
      }
    ]
  },
  {
    "id": "L15",
    "category": "light",
    "text": {
      "ko": "평생 같은 옷만 입기 vs 평생 같은 신발만 신기",
      "en": "Wear the same clothes for the rest of your life vs. Wear the same shoes for the rest of your life"
    },
    "options": [
      {
        "id": "L15_1",
        "text": {
          "ko": "같은 옷",
          "en": "Same clothes"
        }
      },
      {
        "id": "L15_2",
        "text": {
          "ko": "같은 신발",
          "en": "Same shoes"
        }
      }
    ]
  },
  {
    "id": "L16",
    "category": "light",
    "text": {
      "ko": "1년 동안 매일 같은 메뉴 먹고 1억 받기",
      "en": "Eat the same menu every day for a year and get $100,000"
    },
    "options": [
      {
        "id": "L16_1",
        "text": {
          "ko": "한다",
          "en": "I'll do it"
        }
      },
      {
        "id": "L16_2",
        "text": {
          "ko": "안한다",
          "en": "I won't do it"
        }
      }
    ]
  },
  {
    "id": "L17",
    "category": "light",
    "text": {
      "ko": "내 모든 SNS 계정이 내 의지와 상관없이 삭제된다면?",
      "en": "All your SNS accounts are deleted against your will"
    },
    "options": [
      {
        "id": "L17_1",
        "text": {
          "ko": "오히려 좋아",
          "en": "Even better"
        }
      },
      {
        "id": "L17_2",
        "text": {
          "ko": "절대 안돼",
          "en": "Absolutely not"
        }
      }
    ]
  },
  {
    "id": "L18",
    "category": "light",
    "text": {
      "ko": "영화관에서 가장 거슬리는 사람",
      "en": "The most annoying person in a movie theater"
    },
    "options": [
      { "id": "L18_1", "text": { "ko": "스포일러", "en": "Spoiler" } },
      { "id": "L18_2", "text": { "ko": "폰딧불이", "en": "Phone user" } }
    ]
  },
  {
    "id": "L19",
    "category": "light",
    "text": {
      "ko": "인생 BGM을 하나 고른다면?",
      "en": "If you had to choose one background music for your life?"
    },
    "options": [
      {
        "id": "L19_1",
        "text": {
          "ko": "신나는 댄스곡",
          "en": "Exciting dance music"
        }
      },
      {
        "id": "L19_2",
        "text": {
          "ko": "감성 발라드",
          "en": "Emotional ballad"
        }
      }
    ]
  },
  {
    "id": "L20",
    "category": "light",
    "text": {
      "ko": "내 장례식에 틀고 싶은 노래 장르",
      "en": "The genre of music you want to play at your funeral"
    },
    "options": [
      { "id": "L20_1", "text": { "ko": "클래식", "en": "Classical" } },
      {
        "id": "L20_2",
        "text": {
          "ko": "아이돌 댄스곡",
          "en": "Idol dance music"
        }
      }
    ]
  },
  {
    "id": "S01",
    "category": "spicy",
    "text": {
      "ko": "친구가 내 애인에게 '한입만' 시전",
      "en": "Your friend asks your partner for 'just one bite'"
    },
    "options": [
      { "id": "S01_1", "text": { "ko": "가능", "en": "Possible" } },
      { "id": "S01_2", "text": { "ko": "불가능", "en": "Impossible" } }
    ]
  },
  {
    "id": "S02",
    "category": "spicy",
    "text": {
      "ko": "애인이 내 가장 친한 친구와 단둘이 술 마시기",
      "en": "Your partner goes out for a drink alone with your best friend"
    },
    "options": [
      {
        "id": "S02_1",
        "text": {
          "ko": "쿨하게 OK",
          "en": "Cool with it"
        }
      },
      {
        "id": "S02_2",
        "text": {
          "ko": "절대 NO",
          "en": "Absolutely NO"
        }
      }
    ]
  },
  {
    "id": "S03",
    "category": "spicy",
    "text": {
      "ko": "친구의 애인이 나에게만 따로 고민 상담",
      "en": "Your friend's partner comes to you for advice privately"
    },
    "options": [
      {
        "id": "S03_1",
        "text": {
          "ko": "받아준다",
          "en": "I'll listen"
        }
      },
      {
        "id": "S03_2",
        "text": {
          "ko": "선을 긋는다",
          "en": "Draw the line"
        }
      }
    ]
  },
  {
    "id": "S04",
    "category": "spicy",
    "text": {
      "ko": "더 정떨어지는 애인의 술버릇",
      "en": "Your partner's more annoying drinking habit"
    },
    "options": [
      {
        "id": "S04_1",
        "text": {
          "ko": "했던 말 계속 반복하기",
          "en": "Repeating the same thing over and over"
        }
      },
      {
        "id": "S04_2",
        "text": {
          "ko": "갑자기 울기",
          "en": "Crying suddenly"
        }
      }
    ]
  },
  {
    "id": "S05",
    "category": "spicy",
    "text": {
      "ko": "친구에게 100만원 빌려주기 vs 보증 서주기",
      "en": "Lend a friend $1000 vs. Co-sign a loan for a friend"
    },
    "options": [
      {
        "id": "S05_1",
        "text": {
          "ko": "100만원 빌려주기",
          "en": "Lend $1000"
        }
      },
      {
        "id": "S05_2",
        "text": {
          "ko": "보증 서주기",
          "en": "Co-sign a loan"
        }
      }
    ]
  },
  {
    "id": "S06",
    "category": "spicy",
    "text": {
      "ko": "내 애인의 전 애인과 친구 먹기",
      "en": "Becoming friends with your partner's ex"
    },
    "options": [
      { "id": "S06_1", "text": { "ko": "가능", "en": "Possible" } },
      { "id": "S06_2", "text": { "ko": "불가능", "en": "Impossible" } }
    ]
  },
  {
    "id": "S07",
    "category": "spicy",
    "text": {
      "ko": "애인의 핸드폰, 궁금하면 몰래 본다 vs 안 본다",
      "en": "Your partner's phone, if you're curious, do you look secretly or not?"
    },
    "options": [
      { "id": "S07_1", "text": { "ko": "본다", "en": "Look" } },
      { "id": "S07_2", "text": { "ko": "안 본다", "en": "Don't look" } }
    ]
  },
  {
    "id": "S08",
    "category": "spicy",
    "text": {
      "ko": "나 빼고 다 아는 내 애인의 비밀",
      "en": "A secret about your partner that everyone knows but you"
    },
    "options": [
      { "id": "S08_1", "text": { "ko": "알려줘", "en": "Tell me" } },
      {
        "id": "S08_2",
        "text": {
          "ko": "모르는 게 약",
          "en": "Ignorance is bliss"
        }
      }
    ]
  },
  {
    "id": "S09",
    "category": "spicy",
    "text": {
      "ko": "절친이 내 뒷담화 한 걸 알게 됐다",
      "en": "You find out your best friend has been talking behind your back"
    },
    "options": [
      {
        "id": "S09_1",
        "text": {
          "ko": "바로 손절",
          "en": "Cut them off immediately"
        }
      },
      {
        "id": "S09_2",
        "text": {
          "ko": "모른 척한다",
          "en": "Pretend you don't know"
        }
      }
    ]
  },
  {
    "id": "S10",
    "category": "spicy",
    "text": {
      "ko": "연인 사이, 방귀는 트는 게 좋다 vs 절대 안된다",
      "en": "In a relationship, is it better to be open about farting or not?"
    },
    "options": [
      {
        "id": "S10_1",
        "text": {
          "ko": "트는 게 좋다",
          "en": "Better to be open"
        }
      },
      {
        "id": "S10_2",
        "text": {
          "ko": "절대 안된다",
          "en": "Absolutely not"
        }
      }
    ]
  },
  {
    "id": "S11",
    "category": "spicy",
    "text": {
      "ko": "헤어진 연인과 친구가 될 수 있다?",
      "en": "Can you be friends with an ex?"
    },
    "options": [
      { "id": "S11_1", "text": { "ko": "YES", "en": "YES" } },
      { "id": "S11_2", "text": { "ko": "NO", "en": "NO" } }
    ]
  },
  {
    "id": "S12",
    "category": "spicy",
    "text": {
      "ko": "썸 탈 때 더 최악인 행동",
      "en": "Worse behavior when you're crushing on someone"
    },
    "options": [
      {
        "id": "S12_1",
        "text": {
          "ko": "읽씹",
          "en": "Leaving you on read"
        }
      },
      {
        "id": "S12_2",
        "text": {
          "ko": "안읽씹",
          "en": "Not reading your message"
        }
      }
    ]
  },
  {
    "id": "S13",
    "category": "spicy",
    "text": {
      "ko": "친구가 내 옷 스타일을 똑같이 따라 입는다",
      "en": "A friend copies your clothing style exactly"
    },
    "options": [
      {
        "id": "S13_1",
        "text": {
          "ko": "기분 나쁘다",
          "en": "I'm offended"
        }
      },
      {
        "id": "S13_2",
        "text": {
          "ko": "상관없다",
          "en": "I don't care"
        }
      }
    ]
  },
  {
    "id": "S14",
    "category": "spicy",
    "text": {
      "ko": "팀플할 때 더 싫은 사람",
      "en": "Worse person to have in a team project"
    },
    "options": [
      { "id": "S14_1", "text": { "ko": "연락두절", "en": "Goes MIA" } },
      {
        "id": "S14_2",
        "text": {
          "ko": "시키는 것만 함",
          "en": "Only does what they are told"
        }
      }
    ]
  },
  {
    "id": "S15",
    "category": "spicy",
    "text": {
      "ko": "단톡방에서 내 생일만 아무도 축하 안 해줬을 때",
      "en": "No one wishes you a happy birthday in the group chat"
    },
    "options": [
      {
        "id": "S15_1",
        "text": {
          "ko": "서운함 티 낸다",
          "en": "Show that you're upset"
        }
      },
      {
        "id": "S15_2",
        "text": {
          "ko": "조용히 넘어간다",
          "en": "Let it go quietly"
        }
      }
    ]
  },
  {
    "id": "S16",
    "category": "spicy",
    "text": {
      "ko": "데이트 비용, 무조건 더치페이 vs 능력 있는 사람이 더 내기",
      "en": "Dating expenses, always split the bill vs. The more capable person pays more"
    },
    "options": [
      {
        "id": "S16_1",
        "text": {
          "ko": "무조건 더치페이",
          "en": "Always split"
        }
      },
      {
        "id": "S16_2",
        "text": {
          "ko": "능력 따라",
          "en": "Based on ability"
        }
      }
    ]
  },
  {
    "id": "S17",
    "category": "spicy",
    "text": {
      "ko": "내 애인이 주는 선물, 더 싫은 건?",
      "en": "Worse gift from your partner?"
    },
    "options": [
      {
        "id": "S17_1",
        "text": {
          "ko": "쓸모없는 비싼 선물",
          "en": "An expensive but useless gift"
        }
      },
      {
        "id": "S17_2",
        "text": {
          "ko": "필요하지만 싼 선물",
          "en": "A cheap but necessary gift"
        }
      }
    ]
  },
  {
    "id": "S18",
    "category": "spicy",
    "text": {
      "ko": "이성친구가 나에게만 '사랑해'라고 카톡 보냈을 때",
      "en": "A friend of the opposite sex texts you 'I love you' privately"
    },
    "options": [
      {
        "id": "S18_1",
        "text": {
          "ko": "'나도'라고 보낸다",
          "en": "Reply 'me too'"
        }
      },
      {
        "id": "S18_2",
        "text": {
          "ko": "정색한다",
          "en": "Get serious"
        }
      }
    ]
  },
  {
    "id": "S19",
    "category": "spicy",
    "text": {
      "ko": "더 참을 수 없는 배신",
      "en": "More unbearable betrayal"
    },
    "options": [
      {
        "id": "S19_1",
        "text": {
          "ko": "친구가 내 비밀을 퍼뜨림",
          "en": "A friend spreads your secret"
        }
      },
      {
        "id": "S19_2",
        "text": {
          "ko": "애인이 바람핌",
          "en": "Your partner cheats on you"
        }
      }
    ]
  },
  {
    "id": "S20",
    "category": "spicy",
    "text": {
      "ko": "결혼식에 전 애인 부르기 vs 내가 가기",
      "en": "Invite your ex to your wedding vs. Go to your ex's wedding"
    },
    "options": [
      {
        "id": "S20_1",
        "text": {
          "ko": "내 결혼식에 부르기",
          "en": "Invite them to my wedding"
        }
      },
      {
        "id": "S20_2",
        "text": {
          "ko": "전 애인 결혼식 가기",
          "en": "Go to their wedding"
        }
      }
    ]
  },
  {
    "id": "D01",
    "category": "danger",
    "text": {
      "ko": "지금 이 자리에서 가장 먼저 집에 가고 싶어할 것 같은 사람",
      "en": "The person who seems most likely to want to go home first right now"
    },
    "options": [
      {
        "id": "D01_1",
        "text": {
          "ko": "내 왼쪽 사람",
          "en": "The person to my left"
        }
      },
      {
        "id": "D01_2",
        "text": {
          "ko": "내 오른쪽 사람",
          "en": "The person to my right"
        }
      }
    ]
  },
  {
    "id": "D02",
    "category": "danger",
    "text": {
      "ko": "여기 있는 사람 중, 연애하면 가장 피곤할 스타일",
      "en": "Of the people here, the most tiring person to date would be"
    },
    "options": [
      {
        "id": "D02_1",
        "text": {
          "ko": "이 질문을 읽고 있는 나",
          "en": "Me, reading this question"
        }
      },
      { "id": "D02_2", "text": { "ko": "사회자", "en": "The host" } }
    ]
  },
  {
    "id": "D03",
    "category": "danger",
    "text": {
      "ko": "오늘 술값 내줬으면 하는 사람",
      "en": "The person you wish would pay for drinks tonight"
    },
    "options": [
      {
        "id": "D03_1",
        "text": {
          "ko": "가장 돈 많아 보이는 사람",
          "en": "The person who looks richest"
        }
      },
      {
        "id": "D03_2",
        "text": {
          "ko": "가장 먼저 취한 사람",
          "en": "The person who got drunk first"
        }
      }
    ]
  },
  {
    "id": "D04",
    "category": "danger",
    "text": {
      "ko": "지금 술자리에서 딱 한 명, 어색한 사람이 있다",
      "en": "There is exactly one person here who feels awkward"
    },
    "options": [
      { "id": "D04_1", "text": { "ko": "YES", "en": "YES" } },
      { "id": "D04_2", "text": { "ko": "NO", "en": "NO" } }
    ]
  },
  {
    "id": "D05",
    "category": "danger",
    "text": {
      "ko": "다시 돌아간다면, 지금 내 옆 사람과 절대 안 친해진다",
      "en": "If you could go back, you would never become friends with the person next to you"
    },
    "options": [
      { "id": "D05_1", "text": { "ko": "YES", "en": "YES" } },
      { "id": "D05_2", "text": { "ko": "NO", "en": "NO" } }
    ]
  },
  {
    "id": "D06",
    "category": "danger",
    "text": {
      "ko": "이 중에 한 명과 사귈 수 있다면?",
      "en": "If you could date one person here?"
    },
    "options": [
      {
        "id": "D06_1",
        "text": {
          "ko": "차라리 혼자가 낫다",
          "en": "I'd rather be alone"
        }
      },
      {
        "id": "D06_2",
        "text": {
          "ko": "조용히 눈을 감는다",
          "en": "Quietly close my eyes"
        }
      }
    ]
  },
  {
    "id": "D07",
    "category": "danger",
    "text": {
      "ko": "솔직히 오늘 이 자리에 나오기 싫었다",
      "en": "To be honest, I didn't want to come here today"
    },
    "options": [
      { "id": "D07_1", "text": { "ko": "YES", "en": "YES" } },
      { "id": "D07_2", "text": { "ko": "NO", "en": "NO" } }
    ]
  },
  {
    "id": "D08",
    "category": "danger",
    "text": {
      "ko": "여기서 딱 한 명이랑만 친구 할 수 있다면, 그 사람은?",
      "en": "If you could only be friends with one person here, who would it be?"
    },
    "options": [
      {
        "id": "D08_1",
        "text": {
          "ko": "내 맞은편 사람",
          "en": "The person across from me"
        }
      },
      {
        "id": "D08_2",
        "text": {
          "ko": "내 옆 사람",
          "en": "The person next to me"
        }
      }
    ]
  },
  {
    "id": "D09",
    "category": "danger",
    "text": {
      "ko": "이 중에서 비밀이 가장 많아 보이는 사람",
      "en": "The person who seems to have the most secrets here"
    },
    "options": [
      {
        "id": "D09_1",
        "text": {
          "ko": "가장 말이 없는 사람",
          "en": "The quietest person"
        }
      },
      {
        "id": "D09_2",
        "text": {
          "ko": "가장 말이 많은 사람",
          "en": "The most talkative person"
        }
      }
    ]
  },
  {
    "id": "D10",
    "category": "danger",
    "text": {
      "ko": "지금 당장 이 자리에서 한 명을 집에 보낼 수 있다면?",
      "en": "If you could send one person home right now?"
    },
    "options": [
      {
        "id": "D10_1",
        "text": {
          "ko": "가장 신난 사람",
          "en": "The most excited person"
        }
      },
      {
        "id": "D10_2",
        "text": {
          "ko": "가장 피곤해 보이는 사람",
          "en": "The most tired-looking person"
        }
      }
    ]
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

