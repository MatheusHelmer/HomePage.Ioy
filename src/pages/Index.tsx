import { useState, type KeyboardEvent } from 'react';

const tabs = ['cardapio', 'agenda', 'store', 'hotel'] as const;
type Tab = typeof tabs[number];

export default function Index() {
  const [active, setActive] = useState<Tab>('cardapio');
  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    const index = tabs.indexOf(active);
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    setActive(tabs[next]);
    document.getElementById('tab-' + tabs[next])?.focus();
  }
  return (
    <div className="ioy-reference">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header><div className="wrap nav">
<a className="logo" href="#">IOY<i>.</i></a>
<nav><a href="#sistemas">Sistemas</a><a href="#exemplo">Em uso</a><a href="#como-funciona">Como funciona</a><a className="btn" href="https://wa.me/5527988625801?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IOY%20e%20quero%20saber%20mais" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></nav>
</div></header>

<main id="conteudo">
<section className="hero"><div className="wrap">
<div className="top">
<h1>Um sistema para cada tipo de <span>negócio local.</span></h1>
<p className="lead">Cardápio digital para restaurantes, agenda para salões e clínicas, loja online com nota fiscal e site de reservas para pousadas. Tudo feito pela IOY.</p>
<div className="cta"><a className="btn" href="#sistemas">Escolher meu sistema</a><a className="btn ghost" href="https://wa.me/5527988625801?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IOY%20e%20quero%20saber%20mais" target="_blank" rel="noopener noreferrer">Falar com a IOY</a></div>
<p className="micro">Você escolhe o sistema do seu ramo. A implantação é feita junto com você.</p>
</div>

<div className="panel">
<div className="pbar"><i></i><i></i><i></i><span>Veja como cada sistema funciona</span></div>
<div className="pbody">
<div className="side" role="tablist" aria-label="Sistemas IOY">
<button type="button" role="tab" id="tab-cardapio" aria-controls="v-cardapio" aria-selected={active === 'cardapio'} tabIndex={active === 'cardapio' ? 0 : -1} onClick={() => setActive('cardapio')} onKeyDown={handleTabKey}>IOY Cardápio</button>
<button type="button" role="tab" id="tab-agenda" aria-controls="v-agenda" aria-selected={active === 'agenda'} tabIndex={active === 'agenda' ? 0 : -1} onClick={() => setActive('agenda')} onKeyDown={handleTabKey}>IOY Agenda</button>
<button type="button" role="tab" id="tab-store" aria-controls="v-store" aria-selected={active === 'store'} tabIndex={active === 'store' ? 0 : -1} onClick={() => setActive('store')} onKeyDown={handleTabKey}>IOY Store</button>
<button type="button" role="tab" id="tab-hotel" aria-controls="v-hotel" aria-selected={active === 'hotel'} tabIndex={active === 'hotel' ? 0 : -1} onClick={() => setActive('hotel')} onKeyDown={handleTabKey}>IOY Hotelaria</button>
</div>
<div>
<div className={active === 'cardapio' ? 'view on' : 'view'} id="v-cardapio" role="tabpanel" aria-labelledby="tab-cardapio" tabIndex={0}><h3>Salão e delivery no mesmo painel</h3><p>Pedidos, promoções e fidelidade para restaurantes. Dados de exemplo.</p>
<div className="row"><span><b>Mesa 4</b> · 2 pratos, 1 sobremesa</span><span className="pill w">Em preparo</span></div>
<div className="row"><span><b>Delivery #218</b> · Combo da casa</span><span className="pill">A caminho</span></div>
<div className="row"><span><b>Promoção</b> · Sobremesa grátis na terça</span><span className="pill x">Ativa</span></div>
<a className="go" href="https://cardapio.ioy.com.br" target="_blank" rel="noopener noreferrer">Conhecer o IOY Cardápio</a></div>
<div className={active === 'agenda' ? 'view on' : 'view'} id="v-agenda" role="tabpanel" aria-labelledby="tab-agenda" tabIndex={0}><h3>Agenda de hoje</h3><p>Reservas, equipe, pagamentos e lembretes para salões, barbearias e clínicas. Dados de exemplo.</p>
<div className="row"><span><b>09:00</b> · Marina Costa, corte e escova</span><span className="pill">Confirmado</span></div>
<div className="row"><span><b>10:30</b> · Lucas Martins, barba</span><span className="pill">Confirmado</span></div>
<div className="row"><span><b>13:00</b> · Camila Rocha, coloração</span><span className="pill w">Pendente</span></div>
<a className="go" href="https://agenda.ioy.com.br" target="_blank" rel="noopener noreferrer">Conhecer a IOY Agenda</a></div>
<div className={active === 'store' ? 'view on' : 'view'} id="v-store" role="tabpanel" aria-labelledby="tab-store" tabIndex={0}><h3>Do pedido à nota fiscal, sozinho</h3><p>Cada venda atualiza o estoque e emite o documento fiscal.</p>
<div className="row"><span><b>1.</b> Cliente compra na sua vitrine</span><span className="pill x">Vitrine</span></div>
<div className="row"><span><b>2.</b> PIX, cartão ou boleto aprovado</span><span className="pill">Pago</span></div>
<div className="row"><span><b>3.</b> Baixa automática no estoque</span><span className="pill">Atualizado</span></div>
<div className="row"><span><b>4.</b> NF-e ou NFC-e emitida</span><span className="pill">Emitida</span></div>
<a className="go" href="https://lojaonline.ioy.com.br" target="_blank" rel="noopener noreferrer">Conhecer a IOY Store</a></div>
<div className={active === 'hotel' ? 'view on' : 'view'} id="v-hotel" role="tabpanel" aria-labelledby="tab-hotel" tabIndex={0}><h3>Disponibilidade e reserva pelo WhatsApp</h3><p>Site da pousada com acomodações, calendário e contato direto. Dados de exemplo.</p>
<div className="row"><span><b>Acomodação 1</b> · 12 a 14 de dezembro</span><span className="pill">Disponível</span></div>
<div className="row"><span><b>Acomodação 2</b> · 12 a 14 de dezembro</span><span className="pill x">Ocupado</span></div>
<div className="row"><span><b>Acomodação 3</b> · 12 a 14 de dezembro</span><span className="pill w">A confirmar</span></div>
<a className="go" href="https://hotelaria.ioy.com.br/" target="_blank" rel="noopener noreferrer">Ver site de exemplo</a></div>
</div></div></div>
</div></section>

<section id="sistemas" style={{ paddingTop: 48 }}><div className="wrap">
<div className="head"><h2>Qual é o seu negócio?</h2><p>Cada sistema foi pensado para a rotina de um ramo específico, em vez de uma ferramenta genérica para todos.</p></div>
<div className="prods">
<div className="prod"><small>Restaurantes e lanchonetes</small><h3>IOY <i>Cardápio</i></h3><p>Cardápio digital, pedidos e gestão para o seu restaurante.</p>
<ul><li>Salão e delivery</li><li>Promoções</li><li>Programa de fidelidade</li></ul>
<div className="price"><div><b>Sob consulta</b></div><a className="btn" href="https://cardapio.ioy.com.br" target="_blank" rel="noopener noreferrer">Conhecer</a></div></div>

<div className="prod"><small>Barbearias, salões e clínicas</small><h3>IOY <i>Agenda</i></h3><p>Agenda, clientes, equipe e pagamentos numa plataforma só.</p>
<ul><li>Reserva online com link próprio</li><li>Lembretes por WhatsApp</li><li>Sinal de agendamento via Mercado Pago</li><li>Comissões e financeiro</li></ul>
<div className="price"><div><b>A partir de R$ 49,90/mês</b><span>3 planos, de 1 a profissionais ilimitados</span></div><a className="btn" href="https://agenda.ioy.com.br/signup" target="_blank" rel="noopener noreferrer">Criar conta</a></div></div>

<div className="prod"><small>Lojas físicas e e-commerce</small><h3>IOY <i>Store</i></h3><p>Loja online com pagamento integrado, estoque real e nota fiscal automática.</p>
<ul><li>PIX, cartão e boleto</li><li>Estoque único, online e físico</li><li>NF-e e NFC-e pelo painel</li></ul>
<div className="price"><div><b>R$ 150/mês</b><span>+ R$ 600 de implantação</span></div><a className="btn" href="https://wa.me/5527988625801?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IOY%20e%20quero%20a%20IOY%20Store" target="_blank" rel="noopener noreferrer">Quero minha loja</a></div></div>

<div className="prod"><small>Pousadas e hospedagens</small><h3>IOY <i>Hotelaria</i></h3><p>Site da pousada com acomodações, calendário de disponibilidade e área de gestão.</p>
<ul><li>Fotos e acomodações</li><li>Consulta de datas</li><li>Reserva pelo WhatsApp</li></ul>
<div className="price"><div><b>Sob consulta</b></div><a className="btn" href="https://wa.me/5527988625801?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IOY%20e%20quero%20a%20IOY%20Hotelaria" target="_blank" rel="noopener noreferrer">Pedir proposta</a></div></div>
</div></div></section>

<section id="exemplo" style={{ paddingTop: 24 }}><div className="wrap"><div className="live">
<div><h2>Veja um sistema no ar.</h2><p>A Pousada Olhos d’Água, em Viana (ES), tem site com acomodações, calendário de disponibilidade e contato direto pelo WhatsApp, feito com a IOY Hotelaria.</p>
<a className="btn" href="https://hotelaria.ioy.com.br/" target="_blank" rel="noopener noreferrer">Abrir o site da pousada</a></div>
<div className="mini"><small>Biriricas de Cima · Viana, ES</small><h3>Pousada Olhos d’Água</h3>
<div className="row"><span>Acomodações e fotos</span><span className="pill">Online</span></div>
<div className="row"><span>Calendário de disponibilidade</span><span className="pill">Online</span></div>
<div className="row"><span>Reserva pelo WhatsApp</span><span className="pill">Online</span></div></div>
</div></div></section>

<section id="como-funciona" style={{ paddingTop: 24 }}><div className="wrap"><div className="man">
<h2>Negócio pequeno merece a tecnologia das grandes redes.</h2>
<p>Quem atende o cliente na correria perde venda, horário e controle. A IOY cria sistemas simples e específicos para cada ramo, e ajuda você a colocar tudo para rodar.</p>
<div className="steps">
<div className="step"><b>Escolha o sistema</b><p>Pelo seu tipo de negócio: restaurante, atendimento, loja ou hospedagem.</p></div>
<div className="step"><b>Configure com a gente</b><p>Cadastramos serviços, produtos e horários junto com você.</p></div>
<div className="step"><b>Comece a usar</b><p>Compartilhe seu link e acompanhe tudo pelo painel, com suporte em português.</p></div>
</div></div></div></section>

<section style={{ paddingTop: 24 }}><div className="wrap faq">
<div className="head"><h2>Dúvidas comuns</h2></div>
<details><summary>Preciso entender de tecnologia?</summary><p>Não. A configuração é guiada e a IOY ajuda na implantação.</p></details>
<details><summary>Qual sistema serve para mim?</summary><p>Restaurante: Cardápio. Salão, barbearia ou clínica: Agenda. Loja: Store. Pousada: Hotelaria. Se tiver dúvida, chame no WhatsApp.</p></details>
<details><summary>Quanto custa?</summary><p>A Agenda começa em R$ 49,90 por mês. A Store custa R$ 150 por mês, mais R$ 600 de implantação. Cardápio e Hotelaria têm proposta sob medida.</p></details>
<details><summary>Posso usar mais de um sistema?</summary><p>Pode. Fale com a gente e montamos a combinação certa para o seu negócio.</p></details>
</div></section>

<section className="final"><div className="wrap">
<h2>Não sabe qual escolher? A gente ajuda.</h2>
<p className="s">Conte como funciona o seu negócio e indicamos o sistema certo.</p>
<a className="btn" href="https://wa.me/5527988625801?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IOY%20e%20quero%20ajuda%20para%20escolher%20o%20sistema" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
<p className="micro">Sem compromisso.</p>
</div></section>
</main>

<footer><div className="wrap"><span>© 2026 IOY Soluções em Software</span>
<span><a href="https://cardapio.ioy.com.br">Cardápio</a><a href="https://agenda.ioy.com.br">Agenda</a><a href="https://lojaonline.ioy.com.br">Store</a><a href="https://hotelaria.ioy.com.br/">Hotelaria</a></span></div></footer>
    </div>
  );
}
