import React from 'react'
import { Button } from '@/components/ui/button'
import { FileDown } from 'lucide-react'
import dynamic from 'next/dynamic'
import { ResumePDF } from '@/components/pdf-resume'

interface PDFDownloadButtonProps {
  fileName: string;
  timestamp: number;
  className?: string;
}

interface PDFDownloadButtonWrapperProps {
  disabled: boolean;
  timestamp: number;
  className?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ fileName, timestamp, className }) => {
  const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
    { ssr: false }
  )

  return (
    <PDFDownloadLink
      document={<ResumePDF key={timestamp} />}
      fileName={fileName}
      className="inline-flex"
    >
      {({ loading, error }) => (
        <Button className={className} disabled={loading || !!error}>
          <FileDown className="h-4 w-4 mr-2" />
          {loading ? 'Generating...' : error ? 'Error' : 'Download PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  )
}

const PDFDownloadButtonWrapper: React.FC<PDFDownloadButtonWrapperProps> = ({ disabled, timestamp, className = "" }) => {
  if (disabled) {
    return (
      <Button className={className} disabled>
        <FileDown className="h-4 w-4 mr-2" />
        Preparing download...
      </Button>
    )
  }
  
  const fileName = `Matthew_Mollentze_Resume_${new Date().toISOString().split('T')[0]}.pdf`
  return <PDFDownloadButton fileName={fileName} timestamp={timestamp} className={className} />
}

export default PDFDownloadButtonWrapper