# ✨ Todos 앱 ✨

[![CI/CD Status](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📝 소개

이것은 사용자의 할 일 목록을 효율적으로 관리할 수 있도록 돕는 간단한 Todos 웹 애플리케이션입니다. `localStorage`를 사용하여 데이터를 브라우저에 저장하므로, 페이지를 새로고침해도 데이터가 유지됩니다. 깔끔하고 직관적인 사용자 인터페이스를 제공하며, CI/CD 파이프라인을 통해 GitHub Pages에 자동 배포됩니다.

## 🚀 주요 기능

- **할 일 추가**: '새로운 TODO 추가하기' 버튼을 클릭하면 빈 할 일 항목이 생성되고, 즉시 내용을 입력할 수 있습니다.
- **할 일 수정**: 할 일 텍스트를 클릭하거나 옆의 편집 아이콘을 클릭하여 내용을 바로 수정할 수 있습니다.
- **할 일 완료**: 각 할 일 항목 옆의 체크박스를 통해 완료 상태를 토글할 수 있습니다. 완료된 할 일은 취소선으로 표시됩니다.
- **할 일 삭제**: 삭제 아이콘을 클릭하여 필요 없는 할 일 항목을 제거할 수 있습니다.
- **데이터 지속성**: 모든 할 일 목록은 `localStorage`에 저장되어 브라우저를 닫았다 열거나 페이지를 새로고침해도 데이터가 유지됩니다.
- **반응형 디자인**: 다양한 화면 크기에서 일관된 사용자 경험을 제공하도록 최적화되어 있습니다.

## 💻 사용법

### 로컬에서 실행

1.  이 저장소를 클론합니다:
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
    cd YOUR_REPO_NAME
    ```
2.  `index.html` 파일을 웹 브라우저로 엽니다. (예: Chrome, Firefox 등)

### 배포된 앱 접근

이 애플리케이션은 GitHub Pages를 통해 자동으로 배포됩니다. 배포된 앱은 다음 URL에서 접근할 수 있습니다:

`https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`

## 🔧 CI/CD (GitHub Actions)

이 프로젝트는 GitHub Actions를 사용하여 CI/CD 파이프라인이 구축되어 있습니다. `main` 브랜치에 코드가 푸시될 때마다 자동으로 빌드 및 GitHub Pages로 배포됩니다. 워크플로우 설정은 `.github/workflows/deploy.yml` 파일을 참조하세요.
