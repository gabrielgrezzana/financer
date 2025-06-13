import { Box } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dados de exemplo para finanças
const financialData = [
  { mes: 'Jan', valorGuardado: 400, meta: 500 },
  { mes: 'Fev', valorGuardado: 500, meta: 530 },
  { mes: 'Mar', valorGuardado: 600, meta: 660 },
  { mes: 'Abr', valorGuardado: 700, meta: 770 },
  { mes: 'Mai', valorGuardado: 800, meta: 530 },
  { mes: 'Jun', valorGuardado: 900, meta: 800 },
];

interface DotProps {
  cx: number;
  cy: number;
  stroke: string;
  payload: any;
  value: number;
}

const CustomFinancialDot = (props: DotProps) => {
  const { cx, cy, payload, value } = props;
  
  // Verifica se atingiu a meta
  const atingiuMeta = value >= payload.meta;

  if (atingiuMeta) {
    // Ícone de sucesso (dinheiro/moeda)
    return (
      <svg x={cx - 12} y={cy - 12} width={24} height={24} fill="#22c55e" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
      </svg>
    );
  }

  // Ícone de alerta (ainda não atingiu a meta)
  return (
    <svg x={cx - 12} y={cy - 12} width={24} height={24} fill="#ef4444" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-8h2v6h-2V9z"/>
    </svg>
  );
};

// Tooltip customizado para mostrar valores em reais
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{`${label}`}</p>
        <p style={{ margin: '4px 0', color: '#8884d8' }}>
          {`Valor Guardado: R$ ${payload[0]?.value?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
        </p>
        <p style={{ margin: '4px 0', color: '#82ca9d' }}>
          {`Meta: R$ ${payload[1]?.value?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
        </p>
        <p style={{ margin: '4px 0', fontSize: '12px', color: payload[0]?.value >= payload[1]?.value ? '#22c55e' : '#ef4444' }}>
          {payload[0]?.value >= payload[1]?.value ? '✅ Meta atingida!' : '⚠️ Meta não atingida'}
        </p>
      </div>
    );
  }
  return null;
};

function FinancialAnalytics() {
  return (
    <Box w="100%" h="80%" zIndex={99999999} p={4}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        Controle Financeiro - Valor Guardado vs Meta
      </h2>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={financialData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="mes" 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
          {/* Linha da meta (linha de referência) */}
          <Line 
            type="monotone" 
            dataKey="meta" 
            stroke="#82ca9d" 
            strokeDasharray="5 5"
            name="Meta Mensal"
            dot={false}
          />
          
          {/* Linha do valor guardado com pontos customizados */}
          <Line 
            type="monotone" 
            dataKey="valorGuardado" 
            stroke="#8884d8" 
            strokeWidth={3}
            name="Valor Guardado"
            dot={(props) => <CustomFinancialDot {...props} />}
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Resumo estatístico */}
      <Box mt={4} p={4} bg="gray.50" borderRadius="md">
        <h3 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Resumo:</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <span>📊 Meses acima da meta: {financialData.filter(item => item.valorGuardado >= item.meta).length}</span>
          <span>💰 Maior valor: R$ {Math.max(...financialData.map(item => item.valorGuardado)).toLocaleString('pt-BR')}</span>
          <span>📈 Média mensal: R$ {(financialData.reduce((acc, item) => acc + item.valorGuardado, 0) / financialData.length).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </div>
      </Box>
    </Box>
  );
}

export default FinancialAnalytics;