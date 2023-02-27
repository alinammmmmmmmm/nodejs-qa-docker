# 
описание работы pipeline в CI:
- собирает докер-образ из /.github/workflows/api-tests.js.yml и запускает тесты /src/specs/index.spec.js при создании pull-request в ветку main
- собирает докер-образ из .github/workflows/releaze-tests.js.yml и запускает тесты при создании релизов
- генерирует report и coverage в артефактах сборки
- настроена нотификация ссылки на коммит в Telegram при запуске релизных тестах
- добавлена Cron job при запуске фул релизных тестах

описание работы проекта локально:
- собирает докер-образ при выполнении команды docker build -t nodejs-qa-docker . 
- генерирует отчёт в файл /jest-html-report/report.html при выполнении команды npm run test
- отображает таблицу покрытия кода при выполнении команды npm run test:coverage
- публикация отчёта на github pages https://alinammmmmmmmm.github.io/nodejs-qa-docker/jest-html-report/report.html

запуск pipeline работает:
- вручную при запуске в проекте git
- по событию(pull-request, push и т.д.)
- по Crontab расписанию - каждый будний день в 8 утра
