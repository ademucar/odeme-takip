import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

/* Ana sayfadaki "Aylık Dağılım" halka grafiği.
   Ayrı dosyada tutup App'te lazy() ile yükleyerek recharts'ı
   ilk açılış paketinden çıkarıyoruz (daha hızlı ilk boyama). */
export default function CategoryPie({ data, format }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value" stroke="none">
          {data.map((e, i) => <Cell key={i} fill={e.color} />)}
        </Pie>
        <Tooltip formatter={(v) => format(v)}
          contentStyle={{ backgroundColor: '#0B0F19', borderColor: '#1e293b', borderRadius: '0.75rem', color: '#f1f5f9' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
