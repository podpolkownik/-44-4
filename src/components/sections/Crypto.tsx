import React from 'react';

function Crypto() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Новый пик в $180 тыс. и альтсезон — прогнозы аналитиков</h1>

        <section className="mb-8">
          <img
            src="https://sun9-15.userapi.com/impg/wiaIzoYHfAd4QygvWR1Fpvp9WABTTLTJ2DTT9g/kIGL6gRFbeM.jpg?size=1024x1024&quality=96&sign=70b933a0e3c1d9d2d2a019a507b611fc&type=album"
            alt="Bitcoin Growth"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-semibold mb-4">Прогнозы на рост биткоина и альтсезон в 2025 году</h2>

          <p className="text-lg leading-relaxed mb-4">
            Криптовалютная аналитическая компания Cryptorank предсказывает значительный рост биткоина, предполагая, что его пик может быть достигнут 
            в октябре 2025 года. Этот прогноз опирается на исторические данные о циклах роста биткоина, которые происходили после крупных экономических 
            и политических событий, таких как выборы в США. Мнение о достижении $500 тыс. за один биткоин, если США примет его в резерв, также поддержал 
            Майк Новограц, глава Galaxy Digital.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Аналитики также прогнозируют альтсезон в 2025 году — период, когда цены на альтернативные криптовалюты будут расти вместе с биткоином. 
            При таком росте, биткоин, как ожидается, достигнет новых высот, включая целевой уровень в $180 тыс. от VanEck. Инвесторы, уверенные 
            в будущем криптовалют, видят в этом возможность, которая может принести до 1000% доходности на горизонте ближайших лет.
          </p>
        </section>
      </article>
    </div>
  );
}

export default Crypto;
