# 프로젝트 구조 및 컨벤션

## 폴더 구조와 역할 구분
1. `shared`
   - 역할: 프로젝트 전반에서 재사용 가능한 컴포넌트 및 유틸리티 관리.  
   - 구성:
     - api: 공통 API 설정 로직. 
       - 예: http.ts, errorHandler.ts.
     - config: 프로젝트 설정 파일. 
       - 예: constants.ts, env.ts.
     - lib: 공통 유틸리티와 hook. 
       - 예: useForm.ts, formatDate.ts.
     - ui: 공통 UI 컴포넌트. 
       - 예: IconButton.tsx, Map.tsx.
2. `entities`
   - 역할: 도메인 모델과 관련된 로직 및 API 관리.
   - 구성:
     - api: 각 도메인(보호소, 봉사활동, 봉사자)별로 API 요청을 처리하는 파일들. 
       - 예: getShelter.api.ts, postVolunteer.api.ts.
     - model: 각 도메인의 데이터 매핑 및 타입 정의. 
       - 예: mapToShelterDetail.ts, volunteer.type.ts.
3. `features`
   - 역할: 특정 기능을 구현하는 컴포넌트 및 로직 관리.
   - 구성:
     - api: 기능별 추가적인 API 요청 처리. 
       - 예: postShelterLikeFavorite.api.ts.
     - lib: 기능별 hook와 유틸리티 함수. 
       - 예: useShelterFilter.ts, useVolunteerJoinFavorite.ts.
     - ui: 기능별 UI 컴포넌트. 
       - 예: ShelterFilterForm.tsx, VolunteerJoinFavoriteButton.tsx.
4. `widgets`
   - 역할: 독립적이고 재사용 가능한 UI 컴포넌트 관리.
   - 구성: 각 도메인별 위젯 컴포넌트 또는 레이아웃와 같은 템플릿. 예: ShelterList.tsx, VolunteerList.tsx.
5. `app`
   - 역할: 애플리케이션의 전역 설정 및 스타일 관리.
   - 구성: app 초기화, Provider, 전역 css 등을 포함.

---
 
## 컨벤션

### 파일 네이밍
- type 파일: `.type.ts` 접미사를 사용하여 명확히 구분. 
  - 예: shelter.type.ts, volunteer.type.ts.
- api 파일: `.api.ts` 접미사를 사용하여 API 로직 파일을 명확히 구분. 
  - 예: getShelter.api.ts, postVolunteer.api.ts.

### 데이터 매핑
- 데이터 매핑 및 변환 로직은 `mapTo` 접두사를 사용하여 명명. 
  - 예: mapToShelterDetail.ts, mapToVolunteerList.ts.

### barrel 파일
- 각 폴더 내에 `index.ts` 파일을 생성하여 외부에서 해당 폴더의 파일을 불러올 수 있도록 함. 
  - 예: `features/servant/ui/index.ts`, `shared/lib/index.ts`.

---

## 프로젝트 기능

### 보호소

#### 보호소 리스트 페이지
- 필터 기능 (지역, 가까운순, 진행 중인 봉사활동 유무, 관심수)
- 큐레이션 (새로 등록된 보호소, 진행 중인 봉사활동이 있는 보호소 등)
- 보호소 리스트

#### 보호소 상세 페이지
- 보호소 상세 내용 (썸네일, 위치, 소개 등)
- 관심 추가 버튼
- 보호소에서 등록한 봉사활동 리스트

#### 보호소 추가
- 보호소 정보 입력 Form (이름, 주소, 연락처, 설명, 운영시간 등)

### 봉사활동

#### 봉사활동 리스트 페이지
- 필터 기능 (지역, 가까운순, 관심수)
- 큐레이션 (새로 등록된 봉사활동, 관심이 많은 봉사활동)
- 봉사활동 리스트

#### 봉사활동 상세 페이지
- 봉사활동 상세 내용 (설명)
- 관심 추가 버튼
- 공유 버튼 (링크, 카카오톡 연동 등)
- 보호소 소개

#### 봉사활동 추가
- 봉사활동 정보 입력 Form (이름, 보호소, 일정 등)
- 보호소 관계자 인증 필요

### 봉사자

#### 봉사자 리스트 페이지
- 필터 기능 (지역)
- 봉사자 리스트

#### 봉사자 상세 페이지
- 봉사자 프로필 정보, 소개 등
- 봉사활동 요청 버튼 (보호소 관계자 인증된 사용자만 가능)

#### 봉사자 추가
- 봉사자 프로필 정보, 소개 등 입력


---


```tree
.
├── app
│   ├── providers
│   │   ├── ThemeProvider.tsx          # 테마 Provider
│   └── styles
│       ├── global.css                 # global style
│       └── reset.css                  # reset style
├── entities
│   ├── servant
│   │   ├── api
│   │   │   ├── getServant.api.ts      # 봉사자 정보 조회 API
│   │   │   ├── getServantList.api.ts  # 봉사자 목록 조회 API
│   │   │   ├── postServant.api.ts     # 봉사자 정보 생성 API
│   │   │   └── putServant.ts          # 봉사자 정보 업데이트 API
│   │   ├── model
│   │       ├── mapToServantDetail.ts  # 봉사자 상세 정보 매핑 함수
│   │       ├── mapToServantList.ts    # 봉사자 목록 매핑 함수
│   │       └── servant.type.ts        # 봉사자 타입 정의
│   ├── shelter
│   │   ├── api
│   │   │   ├── getShelter.api.ts      # 보호소 정보 조회 API
│   │   │   ├── getShelterList.api.ts  # 보호소 목록 조회 API
│   │   │   ├── postShelter.api.ts     # 보호소 정보 생성 API
│   │   │   └── putServant.ts          # 보호소 정보 업데이트 API
│   │   ├── model
│   │       ├── mapToShelterDetail.ts  # 보호소 상세 정보 매핑 함수
│   │       ├── mapToShelterList.ts    # 보호소 목록 매핑 함수
│   │       └── shelter.type.ts        # 보호소 타입 정의
│   └── volunteer
│       ├── api
│       │   ├── getVolunteer.api.ts    # 봉사활동 정보 조회 API
│       │   ├── getVolunteerList.api.ts# 봉사활동 목록 조회 API
│       │   ├── postVolunteer.api.ts   # 봉사활동 정보 생성 API
│       │   └── putServant.ts          # 봉사활동 정보 업데이트 API
│       ├── model
│           ├── mapToVolunteerDetail.ts# 봉사활동 상세 정보 매핑 함수
│           ├── mapToVolunteerList.ts  # 봉사활동 목록 매핑 함수
│           └── volunteer.type.ts      # 봉사활동 타입 정의
├── features
│   ├── servant
│   │   ├── api
│   │   │   └── postServantRequest.api.ts # 봉사자 요청 생성 API
│   │   ├── lib
│   │   │   ├── useServantFilter.ts       # 봉사자 필터 hook
│   │   │   └── useServantRequest.ts      # 봉사자 요청 hook
│   │   ├── ui
│   │       ├── ServantFilterForm.tsx     # 봉사자 필터 Form 컴포넌트
│   │       ├── ServantRegistrationForm.tsx # 봉사자 등록 Form 컴포넌트
│   │       ├── ServantRequestButton.tsx  # 봉사자 요청 버튼 컴포넌트
│   ├── shelter
│   │   ├── api
│   │   │   └── postShelterLikeFavorite.api.ts # 보호소 좋아요 관심 API
│   │   ├── lib
│   │   │   ├── useShelterFilter.ts       # 보호소 필터 hook
│   │   │   ├── useShelterLikeFavorite.ts # 보호소 좋아요 관심 hook
│   │   │   └── useShelterRegistrationForm.ts # 보호소 등록 Form hook
│   │   ├── ui
│   │       ├── ShelterFilterForm.tsx     # 보호소 필터 Form 컴포넌트
│   │       ├── ShelterLikeFavoriteButton.tsx # 보호소 좋아요 버튼 컴포넌트
│   │       ├── ShelterRegistrationForm.tsx # 보호소 등록 Form 컴포넌트
│   └── volunteer
│       ├── api
│       │   ├── postVolunteerJoinFavorite.api.ts # 봉사활동 참여 관심 API
│       │   └── postVolunteerLikeFavorite.api.ts # 봉사활동 좋아요 관심 API
│       ├── lib
│       │   ├── useVolunteerFilter.ts     # 봉사활동 필터 hook
│       │   ├── useVolunteerJoinFavorite.ts # 봉사활동 참여 관심 hook
│       │   ├── useVolunteerLikeFavorite.ts # 봉사활동 좋아요 관심 hook
│       │   └── useVolunteerRegistrationForm.ts # 봉사활동 등록 Form hook
│       ├── ui
│           ├── VolunteerFilterForm.tsx   # 봉사활동 필터 Form 컴포넌트
│           ├── VolunteerJoinFavoriteButton.tsx # 봉사활동 참여 좋아요 버튼 컴포넌트
│           ├── VolunteerLikeFavoriteButton.tsx # 봉사활동 좋아요 버튼 컴포넌트
│           ├── VolunteerRegistrationForm.tsx # 봉사활동 등록 Form 컴포넌트
├── pages
│   ├── servant
│   │   ├── ui
│   │       ├── ServantDetailPage.tsx     # 봉사자 상세 페이지 컴포넌트
│   │       ├── ServantListPage.tsx       # 봉사자 리스트 페이지 컴포넌트
│   │       ├── ServantRegisterPage.tsx   # 봉사자 등록 페이지 컴포넌트
│   ├── shelter
│   │   ├── ui
│   │       ├── ShelterDetailPage.tsx     # 보호소 상세 페이지 컴포넌트
│   │       ├── ShelterListPage.tsx       # 보호소 리스트 페이지 컴포넌트
│   │       ├── ShelterRegisterPage.tsx   # 보호소 등록 페이지 컴포넌트
│   └── volunteer
│       ├── ui
│           ├── VolunteerDetailPage.tsx   # 봉사활동 상세 페이지 컴포넌트
│           ├── VolunteerListPage.tsx     # 봉사활동 리스트 페이지 컴포넌트
│           ├── VolunteerRegisterPage.tsx # 봉사활동 등록 페이지 컴포넌트
├── shared
│   ├── api
│   │   ├── errorHandler.ts               # API 에러 핸들러
│   │   ├── http.ts                       # HTTP 유틸리티
│   ├── config
│   │   ├── constants.ts                  # 상수 설정 파일
│   │   ├── env.ts                        # 환경 변수 설정 파일
│   ├── lib
│   │   ├── helpers
│   │   │   ├── formatDate.ts             # 날짜 형식 변환 helper
│   │   ├── hooks
│   │   │   ├── useForm.ts                # Form hook
│   │   │   ├── useList.ts                # 리스트 hook
│   │   │   ├── usePagination.ts          # 페이지네이션 hook
│   └── ui
│       ├── IconButton.tsx                # 아이콘 버튼 컴포넌트
│       ├── Map.tsx                       # 지도 컴포넌트
│       ├── ShareButton.tsx               # 공유 버튼 컴포넌트
│       ├── TextField.tsx                 # 텍스트 필드 컴포넌트
└── widgets
    ├── layout
    │   └── ui
    │       ├── Layout.tsx                # 레이아웃 컴포넌트
    ├── servant
    │   ├── lib
    │   │   ├── useServantList.ts         # 봉사자 리스트 hook
    │   │   └── useServantProfile.ts      # 봉사자 프로필 hook
    │   └── ui
    │       ├── ServantList.tsx           # 봉사자 리스트 컴포넌트
    │       ├── ServantProfile.tsx        # 봉사자 프로필 컴포넌트
    ├── shelter
    │   ├── lib
    │   │   ├── useShelterInfo.ts         # 보호소 정보 hook
    │   │   ├── useShelterList.ts         # 보호소 리스트 hook
    │   │   └── useShelterVolunteerList.ts# 보호소 봉사활동 리스트 hook
    │   └── ui
    │       ├── ShelterInfo.tsx           # 보호소 정보 컴포넌트
    │       ├── ShelterList.tsx           # 보호소 리스트 컴포넌트
    │       ├── ShelterVolunteerList.tsx  # 보호소 봉사활동 리스트 컴포넌트
    └── volunteer
        ├── lib
        │   ├── useVolunteerInfo.ts       # 봉사활동 정보 hook
        │   └── useVolunteerList.ts       # 봉사활동 리스트 hook
        └── ui
            ├── VolunteerInfo.tsx         # 봉사활동 정보 컴포넌트
            ├── VolunteerList.tsx         # 봉사활동 리스트 컴포넌트
            └── index.ts
```