# 
описание работы pipeline в ветке dev в CI:
- собирает докер-образ из /.github/workflows/api-tests.js.yml,запускает тесты /src/specs/index.spec.js и создаёт 3 артефакта(репорт,coverage,github page) при пуше коммента(билд pages-build-deployment) и pull-request(билд Unit tests-docker) в ветку main(по событию и мануально) - примеры https://github.com/alinammmmmmmmm/nodejs-qa-docker/actions/runs/4336351234 и https://github.com/alinammmmmmmmm/nodejs-qa-docker/actions/runs/4336421225
- собирает докер-образ из .github/workflows/releaze-tests.js.yml,запускает тесты(билд Full tests) и создаёт артефакты(репорт,coverage) при создании релиза с target dev и тегом пререлиз(только по событию,вручную только в main ветке ) - пример https://github.com/alinammmmmmmmm/nodejs-qa-docker/actions/runs/4336376508
- настроена нотификация ссылки на коммит в Telegram при запуске релизных тестах
- добавлена Cron job при запуске релизных тестах(закомменчена)

описание работы проекта локально:
- собирает докер-образ при выполнении команды docker build -t nodejs-qa-docker . 
- генерирует отчёт в файл /jest-html-report/report.html при выполнении команды npm run test
- отображает таблицу покрытия кода при выполнении команды npm run test:coverage
- публикация последнего репорта на github pages https://alinammmmmmmmm.github.io/nodejs-qa-docker ,при запуске нового билда ветка gh-pages обновится и репот станет доступен по прямой дефолтной ссылке https://alinammmmmmmmm.github.io/nodejs-qa-docker/report.html изза удаления индексного файла

запуск pipeline работает:
- вручную при запуске в проекте git(pull-request, push)
- по событию(pull-request, push,releaze)
- по Crontab расписанию 
