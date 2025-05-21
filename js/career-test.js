document.addEventListener('DOMContentLoaded', function() {
        // Данные для теста
        const testData = {
          questions: [
            {
              id: 1,
              text: "Что для тебя важнее в работе?",
              options: [
                { id: 'a', text: "Стабильный доход и уверенность в завтрашнем дне" },
                { id: 'b', text: "Возможность работать руками и видеть результаты своего труда" },
                { id: 'c', text: "Возможность работать с техникой и оборудованием" },
                { id: 'd', text: "Возможность творчески подходить к работе" }
              ]
            },
            {
              id: 2,
              text: "Какая рабочая среда тебе ближе?",
              options: [
                { id: 'a', text: "В помещении, в комфортных условиях" },
                { id: 'b', text: "Работа на свежем воздухе" },
                { id: 'c', text: "Смешанный формат — и в помещении, и на улице" },
                { id: 'd', text: "В мастерской или лаборатории" }
              ]
            },
            {
              id: 3,
              text: "Какие навыки ты хотел бы применять?",
              options: [
                { id: 'a', text: "Работа руками, точность и концентрация" },
                { id: 'b', text: "Управление сложными механизмами и техникой" },
                { id: 'c', text: "Решение технических задач и проблем" },
                { id: 'd', text: "Создание чего-то нового или улучшение существующего" }
              ]
            },
            {
              id: 4,
              text: "Как ты относишься к физическим нагрузкам?",
              options: [
                { id: 'a', text: "Предпочитаю минимальные физические нагрузки" },
                { id: 'b', text: "Готов к умеренным нагрузкам" },
                { id: 'c', text: "Физическая активность важна для меня" },
                { id: 'd', text: "Не боюсь тяжелой физической работы" }
              ]
            },
            {
              id: 5,
              text: "Что тебя больше всего привлекает?",
              options: [
                { id: 'a', text: "Электроника и схемы" },
                { id: 'b', text: "Механизмы и их устройство" },
                { id: 'c', text: "Строительство и создание конструкций" },
                { id: 'd', text: "Производственные процессы" }
              ]
            },
            {
              id: 6,
              text: "Как ты относишься к командной работе?",
              options: [
                { id: 'a', text: "Предпочитаю работать индивидуально" },
                { id: 'b', text: "Могу работать как самостоятельно, так и в команде" },
                { id: 'c', text: "Люблю взаимодействовать с коллегами" },
                { id: 'd', text: "Командная работа для меня важнее всего" }
              ]
            },
            {
              id: 7,
              text: "Что тебе нравится делать в свободное время?",
              options: [
                { id: 'a', text: "Ремонтировать что-то дома или чинить технику" },
                { id: 'b', text: "Собирать модели или конструкторы" },
                { id: 'c', text: "Разбираться в электронике или программировании" },
                { id: 'd', text: "Заниматься рукоделием или мастерить что-то" }
              ]
            },
            {
              id: 8,
              text: "Насколько важна для тебя точность в работе?",
              options: [
                { id: 'a', text: "Очень важна, люблю работать с мелкими деталями" },
                { id: 'b', text: "Важна, но больше ценю конечный результат" },
                { id: 'c', text: "Средне, могу работать как с точными, так и с крупными объектами" },
                { id: 'd', text: "Предпочитаю работу с крупными объектами" }
              ]
            },
            {
              id: 9,
              text: "Какой уровень ответственности тебе комфортен?",
              options: [
                { id: 'a', text: "Высокий, готов отвечать за результаты своей работы" },
                { id: 'b', text: "Средний, предпочитаю разделять ответственность" },
                { id: 'c', text: "Предпочитаю четкие инструкции и контроль" },
                { id: 'd', text: "Готов брать на себя ответственность только за свой участок работы" }
              ]
            },
            {
              id: 10,
              text: "Какие аспекты в работе тебя больше мотивируют?",
              options: [
                { id: 'a', text: "Финансовое вознаграждение и стабильность" },
                { id: 'b', text: "Возможность профессионального роста" },
                { id: 'c', text: "Интересные задачи и разнообразие" },
                { id: 'd', text: "Польза для общества и видимый результат труда" }
              ]
            }
          ],
          results: {
            electrician: {
              name: "Электрик/Электромонтажник",
              score: 0,
              description: "Профессия электрика идеально подойдет тебе! Ты обладаешь техническим складом ума и точностью, необходимыми для работы с электрическими системами. Электрики устанавливают, обслуживают и ремонтируют электрооборудование в жилых домах, офисах и на производствах. Твои навыки помогут обеспечивать безопасность и надежность электрических систем.",
              skills: "Технические знания, внимательность, способность к логическому мышлению, хорошая координация движений, умение работать с инструментами",
              education: "Среднее профессиональное образование по специальности «Электромонтаж» или профильные курсы",
              salary: "От 140 000 ₸ до 560 000 ₸ в месяц в зависимости от квалификации и региона"
            },
            mechanic: {
              name: "Автомеханик/Слесарь",
              score: 0,
              description: "Профессия автомеханика идеально подойдет тебе! Ты обладаешь практическим складом ума и любовью к механизмам. Автомеханики диагностируют, обслуживают и ремонтируют автомобили разных типов. Твое умение разбираться в устройстве техники и решать практические задачи сделает тебя ценным специалистом в этой сфере.",
              skills: "Техническое мышление, пространственное воображение, физическая выносливость, хорошая память на детали, работа с инструментами",
              education: "Среднее профессиональное образование по специальности «Техническое обслуживание и ремонт автомобильного транспорта»",
              salary: "От 150 000 ₸ до 500 000 ₸ в месяц в зависимости от квалификации и места работы"
            },
            welder: {
              name: "Сварщик",
              score: 0,
              description: "Профессия сварщика идеально подойдет тебе! Ты обладаешь точностью и тщательностью в работе с материалами. Сварщики соединяют металлические детали с помощью различных видов сварки. Твои навыки будут востребованы в строительстве, машиностроении, судостроении и многих других отраслях промышленности.",
              skills: "Хорошее зрение, пространственное воображение, физическая выносливость, точность движений, концентрация внимания",
              education: "Среднее профессиональное образование по специальности «Сварочное производство» или профессиональные курсы",
              salary: "От 120 000 ₸ до 850 000 ₸ в месяц в зависимости от разряда и сложности работ"
            },
            builder: {
              name: "Строитель",
              score: 0,
              description: "Профессия строителя идеально подойдет тебе! Ты ценишь возможность видеть результаты своего труда и создавать что-то масштабное. Строители возводят здания, мосты, дороги и другие конструкции. Твоя способность к физическому труду и пространственному мышлению сделают тебя успешным в этой профессии.",
              skills: "Физическая выносливость, пространственное мышление, умение работать в команде, практические навыки работы с инструментами и материалами",
              education: "Среднее профессиональное образование по строительным специальностям или обучение непосредственно на производстве",
              salary: "От 150 000 ₸ до 400 000 ₸ в месяц в зависимости от специализации и региона"
            },
            operator: {
              name: "Оператор станков с ЧПУ",
              score: 0,
              description: "Профессия оператора станков с ЧПУ идеально подойдет тебе! Ты сочетаешь техническое мышление с точностью и внимательностью. Операторы программируют и управляют работой высокотехнологичных станков, которые производят детали для различных отраслей промышленности. Твои навыки будут востребованы в современном производстве.",
              skills: "Технический склад ума, понимание чертежей, внимательность к деталям, базовые знания программирования, аккуратность",
              education: "Среднее профессиональное образование по специальности «Технология машиностроения» или соответствующие курсы",
              salary: "От 150 000 ₸ до 350 000 ₸ в месяц в зависимости от сложности оборудования и производства"
            }
          },
          scoring: {
            1: { a: ["electrician", "operator"], b: ["welder", "builder"], c: ["mechanic", "operator"], d: ["welder"] },
            2: { a: ["electrician", "operator"], b: ["builder"], c: ["mechanic", "welder"], d: ["mechanic", "operator"] },
            3: { a: ["welder", "electrician"], b: ["mechanic", "operator"], c: ["mechanic", "electrician"], d: ["builder", "welder"] },
            4: { a: ["electrician", "operator"], b: ["mechanic"], c: ["builder"], d: ["welder", "builder"] },
            5: { a: ["electrician"], b: ["mechanic"], c: ["builder"], d: ["operator", "welder"] },
            6: { a: ["electrician", "operator"], b: ["mechanic", "welder"], c: ["builder"], d: ["builder"] },
            7: { a: ["mechanic"], b: ["operator"], c: ["electrician"], d: ["welder", "builder"] },
            8: { a: ["electrician", "operator"], b: ["welder"], c: ["mechanic"], d: ["builder"] },
            9: { a: ["electrician", "welder"], b: ["mechanic", "operator"], c: ["builder"], d: ["mechanic"] },
            10: { a: ["operator", "mechanic"], b: ["electrician"], c: ["welder"], d: ["builder"] }
          }
        };

        let currentQuestion = 0;
        const answers = {};

        function renderTest() {
          const testContainer = document.getElementById('test-container');

          if (currentQuestion < testData.questions.length) {
            // Показываем вопрос
            const question = testData.questions[currentQuestion];

            const progressDots = testData.questions.map((q, i) =>
              `<div class="progress-dot ${i <= currentQuestion ? 'active' : ''}"></div>`
            ).join('');

            // В функции renderTest() изменить генерацию HTML для вопроса:
            testContainer.innerHTML = `
              <div class="progress-indicator">
                ${progressDots}
              </div>
              <div class="question-card">
                <h2 class="question-title">Вопрос ${question.id} из ${testData.questions.length}</h2>
                <h3 class="about__main-text mb-4">${question.text}</h3>
                <div class="answer-options">
                  ${question.options.map(option => `
                    <div class="answer-option" data-id="${option.id}">
                      ${option.text}
                    </div>
                  `).join('')}
                </div>
                <div class="test-nav">
                  ${currentQuestion > 0 ? '<button class="test-button" id="prev-button">Назад</button>' : '<div></div>'}
                  <button class="test-button" id="next-button" disabled>Далее</button>
                </div>
              </div>
            `;

            // Добавляем обработчики
            const options = document.querySelectorAll('.answer-option');
            options.forEach(option => {
              option.addEventListener('click', function() {
                // Убираем выделение с других опций
                options.forEach(opt => opt.classList.remove('selected'));
                // Выделяем выбранный
                this.classList.add('selected');
                // Запоминаем ответ
                answers[question.id] = this.getAttribute('data-id');
                // Разблокируем кнопку
                document.getElementById('next-button').disabled = false;
              });

              // Если на этот вопрос уже есть ответ
              if (answers[question.id] === option.getAttribute('data-id')) {
                option.classList.add('selected');
                document.getElementById('next-button').disabled = false;
              }
            });

            // Кнопка "Далее"
            document.getElementById('next-button').addEventListener('click', function() {
              currentQuestion++;
              renderTest();
            });

            // Кнопка "Назад"
            if (currentQuestion > 0) {
              document.getElementById('prev-button').addEventListener('click', function() {
                currentQuestion--;
                renderTest();
              });
            }
          } else {
            // Показываем результаты
            calculateResults();
            showResults();
          }
        }

        function calculateResults() {
          // Обнуляем все счетчики
          Object.keys(testData.results).forEach(key => {
            testData.results[key].score = 0;
          });

          // Обрабатываем ответы
          Object.keys(answers).forEach(questionId => {
            const answer = answers[questionId];
            const professions = testData.scoring[questionId][answer];

            if (professions) {
              professions.forEach(profession => {
                testData.results[profession].score += 1;
              });
            }
          });
        }

        function showResults() {
          // Определяем профессию с наивысшим баллом
          const bestResult = Object.values(testData.results)
            .sort((a, b) => b.score - a.score)[0];

          const testContainer = document.getElementById('test-container');

          testContainer.innerHTML = `
            <div class="result-card">
              <h2 class="result-title">Твой результат:</h2>

              <div class="profession-match">
                <h3 class="offering__professions-title">${bestResult.name}</h3>
                <p class="offering__professions-text">${bestResult.description}</p>

                <div class="mt-4">
                  <h4 class="offering__professions-title">Необходимые навыки:</h4>
                  <p class="offering__professions-text">${bestResult.skills}</p>
                </div>

                <div class="mt-3">
                  <h4 class="offering__professions-title">Образование:</h4>
                  <p class="offering__professions-text">${bestResult.education}</p>
                </div>

                <div class="mt-3">
                  <h4 class="offering__professions-title">Зарплата:</h4>
                  <p class="offering__professions-text">${bestResult.salary}</p>
                </div>
              </div>

              <div class="test-nav mt-4 row g-3">
                <button class="test-button col-5" id="retry-button">Пройти заново</button>
                <a href="/pages/professions.html" class="test-button text-center col-5">Узнать больше</a>
              </div>
            </div>
          `;

          // Кнопка "Пройти заново"
          document.getElementById('retry-button').addEventListener('click', function() {
            currentQuestion = 0;
            Object.keys(answers).forEach(key => delete answers[key]);
            renderTest();
          });
        }

        // Запускаем тест
        renderTest();
      });
