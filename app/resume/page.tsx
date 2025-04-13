"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'
import { ResumePDF } from '@/components/pdf-resume'
import PDFDownloadButtonWrapper from '@/components/pdf-download-button'
import {  Eye, } from "lucide-react"
import { useSearchParams } from 'next/navigation'

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  { ssr: false, loading: () => <PDFLoadingPlaceholder /> }
)

function PDFLoadingPlaceholder() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Eye className="h-16 w-16 text-gray-300" />
        <p className="text-gray-500">Loading PDF viewer...</p>
      </div>
    </div>
  )
}

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false)
  const [key] = useState(Date.now())
  const [isPdfReady, setIsPdfReady] = useState(false)
  const searchParams = useSearchParams()
  
  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => {
      setIsPdfReady(true)
      
      if (searchParams.get('download') === 'true') {
        const downloadTimer = setTimeout(() => {
          const downloadButton = document.querySelector('.pdf-download-button')
          if (downloadButton instanceof HTMLElement) {
            downloadButton.click()
          }
        }, 1000)
        
        return () => clearTimeout(downloadTimer)
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [searchParams])

  return (
    <main className="container py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold">My Resume</h1>
          
          <div className="pdf-download-button">
            <PDFDownloadButtonWrapper 
              disabled={!isClient || !isPdfReady}
              timestamp={key}
            />
          </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resume Preview</CardTitle>
        </CardHeader>
        <CardContent>
          {isClient && isPdfReady ? (
            <div className="h-[800px] w-full border border-gray-200 rounded-md overflow-hidden">
              <PDFViewer width="100%" height="100%" className="rounded-md">
                <ResumePDF key={key} />
              </PDFViewer>
            </div>
          ) : (
            <div className="h-[800px] w-full flex items-center justify-center border border-gray-200 rounded-md">
              <div className="flex flex-col items-center gap-4">
                <Eye className="h-16 w-16 text-gray-300" />
                <p className="text-gray-500">Loading resume preview...</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  )
}