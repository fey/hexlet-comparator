import cn from 'classnames';
import Link from 'next/link';
import { getProfessions } from 'lib/api.js';
import BaseLayout from 'components/layouts/BaseLayout.jsx';
import routes from 'lib/routes.js';

const ProfessionItem = (props) => {
  const { profession } = props;

  const iconClassLine = cn(
    'colored fs-2',
    `devicon-${profession.programmingLanguage}-plain`,
  );

  return (
    <div className="col mb-3">
      <div className="card">
        <div className="card-body">
          <i className={iconClassLine} />
          <h2>{ profession.name }</h2>
          <div className="text-muted">{ profession.description }</div>
          <Link href={routes.professionPath(profession.id)}>{profession.name}</Link>
        </div>
      </div>
    </div>
  );
};

const ProfessionsHome = (props) => {
  const { professions } = props;
  return (
    <BaseLayout>
      <h1 className="mb-5">Профессии</h1>
      <div className="row row-cols-2">
        {professions.map((s) => <ProfessionItem profession={s} key={s.id} />)}
      </div>
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const professions = await getProfessions();

  const result = {
    props: {
      professions,
    },
  };
  return result;
};

export default ProfessionsHome;
