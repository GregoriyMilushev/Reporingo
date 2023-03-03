import supabase from './supabaseClient';

async function create(report) {
  const reportAsString = JSON.stringify(report);
  return supabase.from('reports').insert([
    {
      report: reportAsString,
    },
  ]);
}

async function update(id, report) {
  const reportAsString = JSON.stringify(report);
  return supabase.from('reports').update({ report: reportAsString }).eq('id', id);
}

async function getAll() {
  let { data: reports, error } = await supabase.from('reports').select('*');

  return parseReports(reports);
}

async function getById(id) {
  let { data: reports, error } = await supabase.from('reports').select('*').eq('id', id);

  return parseReports(reports)[0];
}

const Report = {
  create,
  getAll,
  getById,
  update,
};

export default Report;

function parseReports(reports) {
  let parsedReports = reports.map((report) => {
    return {
      ...report,
      report: JSON.parse(report.report),
    };
  });
  return parsedReports;
}
