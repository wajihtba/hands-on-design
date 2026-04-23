// Final CTA + footer
function CtaFooter() {
  return (
    <>
      <section className="cta-section">
        <div className="container cta-inner">
          <span className="mono small eyebrow">// Prêt à shipper ?</span>
          <h2 className="h2 cta-h">
            Arrêtez de regarder.<br />
            <span className="h2-accent">Commencez à construire.</span>
          </h2>
          <p className="section-lede">
            Rejoignez 12 000+ ingénieurs qui ont choisi d'apprendre en faisant.
            Votre premier projet est gratuit — sans carte bancaire, sans
            tutoriel, juste du code qui tourne.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary btn-lg mono">
              <span className="mono">$ git clone votre-carriere</span>
            </a>
          </div>
          <div className="cta-micro mono small">
            Gratuit · Sans carte bancaire · Prêt en 30 secondes
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Logo style={{ width: 160, height: 'auto' }} />
            <p className="footer-tag mono small">Les outils changent. L'ingénierie reste.</p>
          </div>
          <div className="footer-cols">
            <div>
              <div className="footer-h mono small">Produit</div>
              <a href="#tracks">Tracks</a>
              <a href="#methode">Méthode</a>
              <a href="#stories">Témoignages</a>
            </div>
            <div>
              <div className="footer-h mono small">Entreprise</div>
              <a href="#">Blog</a>
              <a href="#">Carrières</a>
              <a href="mailto:hello@handson.dev">hello@handson.dev</a>
            </div>
            <div>
              <div className="footer-h mono small">Légal</div>
              <a href="#">Confidentialité</a>
              <a href="#">Conditions</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom mono small">
          <span>© 2026 Hands-on. Tous droits réservés.</span>
          <span>Construit avec ✳ par des ingénieurs, pour des ingénieurs.</span>
        </div>
      </footer>
    </>
  );
}

window.CtaFooter = CtaFooter;
