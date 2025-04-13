"use client"

import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer'
import { experiences, certifications, education } from '@/lib/data'
import { siteConfig } from '@/lib/config'
import { FileDown } from 'lucide-react'
import { Button } from './ui/button'
import NextLink from 'next/link'
import PDFDownloadButtonWrapper from '@/components/pdf-download-button'

Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf' },
    { src: '/fonts/Inter-Bold.ttf', fontWeight: 'bold' },
  ]
})

interface EducationItem {
  type: 'education';
  school: string;
  qualification: string;
  subjects: string[];
  period: string;
}

interface CertificationItem {
  type: 'certification';
  title: string;
  organization: string;
  image: string;
  period?: string;
  issuedDate?: string;
  credentialId?: string;
  description?: string;
}

type EducationOrCertification = EducationItem | CertificationItem;

function isEducationItem(item: EducationOrCertification): item is EducationItem {
  return item.type === 'education';
}

interface PDFResumeButtonProps {
  isMobile?: boolean;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#333',
  },
  section: {
    marginBottom: 15,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1E40AF', 
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    color: '#4B5563',
  },
  contactInfo: {
    flexDirection: 'column',
    fontSize: 9,
    color: '#4B5563',
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingBottom: 3,
    borderBottom: 1,
    borderBottomColor: '#E5E7EB',
    color: '#1E40AF',
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  companyInitial: {
    width: 25,
    height: 25,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  experienceDetails: {
    flex: 1,
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  position: {
    fontSize: 11,
    marginBottom: 2,
  },
  duration: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 3,
  },
  location: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 3,
  },
  description: {
    fontSize: 9,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  bulletList: {
    marginLeft: 10,
    marginBottom: 4,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletText: {
    fontSize: 9,
    lineHeight: 1.4,
    flex: 1,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  skill: {
    fontSize: 8,
    backgroundColor: '#EFF6FF',
    color: '#1E40AF',
    padding: '2 5',
    borderRadius: 4,
    marginRight: 3,
    marginBottom: 3,
  },
  educationItem: {
    marginBottom: 10,
  },
  school: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  degree: {
    fontSize: 10,
    marginBottom: 3,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#9CA3AF', 
    fontSize: 8,
    paddingTop: 10,
    borderTop: '1pt solid #E5E7EB',
  },
  linkText: {
    color: '#3B82F6',
    textDecoration: 'underline',
  },
  twoColumnSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  columnLeft: {
    width: '48%',
  },
  columnRight: {
    width: '48%',
  },
  columnTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingBottom: 2,
    borderBottom: 1,
    borderBottomColor: '#E5E7EB',
    color: '#1E40AF',
  },
  infoSection: {
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    width: '30%',
    color: '#4B5563',
  },
  infoValue: {
    fontSize: 9,
    flex: 1,
  },
  infoSubItem: {
    fontSize: 9,
    marginLeft: 10,
    marginBottom: 2,
    color: '#6B7280', 
  },
  flag: {
    marginRight: 5,
    fontSize: 11,
  },
})

export const ResumePDF: React.FC = () => {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`
  const portfolioUrl = siteConfig.url

  const filteredExperiences = experiences.filter(exp => exp.company !== "Career Break")

  const educationAndCertifications: EducationOrCertification[] = [
    ...education.map(item => ({ ...item, type: 'education' as const })),
    ...certifications.map(item => ({ ...item, type: 'certification' as const }))
  ]

  const midpoint = Math.ceil(educationAndCertifications.length / 2)
  const leftColumnItems = educationAndCertifications.slice(0, midpoint)
  const rightColumnItems = educationAndCertifications.slice(midpoint)
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header/Contact Info */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>Matthew Mollentze</Text>
            <Text style={styles.title}>Senior Frontend Developer</Text>
            <View style={styles.contactInfo}>
              <View style={styles.contactRow}>
                <Text>Location: Pretoria, Gauteng, South Africa</Text>
              </View>
              <View style={styles.contactRow}>
                <Text>Email: </Text>
                <Link src={siteConfig.links.email}><Text style={styles.linkText}>{siteConfig.links.email.replace('mailto:', '')}</Text></Link>
              </View>
              <View style={styles.contactRow}>
                <Text>LinkedIn: </Text>
                <Link src={siteConfig.links.linkedin}><Text style={styles.linkText}>{siteConfig.links.linkedin.replace('https://', '')}</Text></Link>
              </View>
              <View style={styles.contactRow}>
                <Text>GitHub: </Text>
                <Link src={siteConfig.links.github}><Text style={styles.linkText}>{siteConfig.links.github.replace('https://', '')}</Text></Link>
              </View>
              <View style={styles.contactRow}>
                <Text>Portfolio: </Text>
                <Link src={portfolioUrl}><Text style={styles.linkText}>{portfolioUrl.replace('https://', '')}</Text></Link>
              </View>
            </View>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.description}>
            Senior Frontend Developer with extensive experience in Vue.js, React, and TypeScript.
            I create intuitive and responsive user interfaces while collaborating with cross-functional teams.
            I am creative, resourceful and flexible, adapting to changing priorities while maintaining a positive attitude and strong work ethic.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          
          {/* Iterate through filtered experiences with wrap={false} on each experience to prevent page breaks */}
          {filteredExperiences.map((experience, index) => (
            <View key={`experience-${experience.company}-${index}`} style={styles.experienceItem} wrap={false}>
              <View style={styles.experienceHeader}>
                <View style={styles.companyInitial}>
                  <Text style={styles.initialText}>{experience.company.charAt(0)}</Text>
                </View>
                <View style={styles.experienceDetails}>
                  <Text style={styles.company}>{experience.company}</Text>
                  <Text style={styles.position}>{experience.role}</Text>
                  <Text style={styles.duration}>{experience.period}</Text>
                  {experience.location && (
                    <Text style={styles.location}>{experience.location.split('·')[0].trim()}</Text>
                  )}
                </View>
              </View>
              
              <Text style={styles.description}>{experience.description}</Text>
              
              {/* Key Achievement */}
              {experience.keyAchievement && (
                <View style={styles.bulletList}>
                  <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 2 }}>Key Achievement:</Text>
                  <View style={styles.bullet}>
                    <Text style={{ marginRight: 5 }}>•</Text>
                    <Text style={styles.bulletText}>{experience.keyAchievement}</Text>
                  </View>
                </View>
              )}
              
              {/* Responsibilities - Only for first 2 experiences */}
              {experience.responsibilities && experience.responsibilities.length > 0 && index < 2 && (
                <View style={styles.bulletList}>
                  <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 2 }}>
                    Responsibilities:
                  </Text>
                  {experience.responsibilities.slice(0, 4).map((item, i) => (
                    <View key={`resp-${index}-${i}`} style={styles.bullet}>
                      <Text style={{ marginRight: 5 }}>•</Text>
                      <Text style={styles.bulletText}>{item}</Text>
                    </View>
                  ))}
                </View>
              )}
              
              {/* Achievements */}
              {experience.achievements && experience.achievements.length > 0 && (
                <View style={styles.bulletList}>
                  <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 2, marginTop: 2 }}>
                    Achievements:
                  </Text>
                  {experience.achievements.slice(0, 3).map((item, i) => (
                    <View key={`achievement-${index}-${i}`} style={styles.bullet}>
                      <Text style={{ marginRight: 5 }}>•</Text>
                      <Text style={styles.bulletText}>{item}</Text>
                    </View>
                  ))}
                </View>
              )}
              
              {/* Projects */}
              {experience.projects && experience.projects.length > 0 && (
                <View style={styles.bulletList}>
                  <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 2, marginTop: 2 }}>
                    Projects:
                  </Text>
                  {experience.projects.slice(0, 3).map((item, i) => (
                    <View key={i} style={styles.bullet}>
                      <Text style={{ marginRight: 5 }}>•</Text>
                      <Text style={styles.bulletText}>{item}</Text>
                    </View>
                  ))}
                </View>
              )}
              
              {/* Skills */}
              {experience.skills && experience.skills.length > 0 && (
                <View>
                  <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 2, marginTop: 2 }}>
                    Skills:
                  </Text>
                  <View style={styles.skillsContainer}>
                    {experience.skills.map((skill, i) => (
                      <Text key={i} style={styles.skill}>{skill}</Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Education and Certifications combined across two columns */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>Education & Certifications</Text>
          
          <View style={styles.twoColumnSection}>
            {/* Left Column */}
            <View style={styles.columnLeft}>
              {leftColumnItems.map((item, index) => (
                <View key={index} style={styles.educationItem}>
                  {isEducationItem(item) ? (
                    <>
                      <Text style={styles.school}>{item.school}</Text>
                      <Text style={styles.degree}>{item.qualification}</Text>
                      <Text style={styles.duration}>{item.period}</Text>
                      {item.subjects && item.subjects.length > 0 && (
                        <Text style={styles.description}>
                          Subjects: {item.subjects.join(', ')}
                        </Text>
                      )}
                    </>
                  ) : (
                    <>
                      <Text style={styles.school}>{item.title}</Text>
                      <Text style={styles.degree}>{item.organization}</Text>
                      <Text style={styles.duration}>{item.period || item.issuedDate}</Text>
                      {item.description && (
                        <Text style={styles.description}>{item.description}</Text>
                      )}
                      {item.credentialId && (
                        <Text style={styles.description}>Credential ID: {item.credentialId}</Text>
                      )}
                    </>
                  )}
                </View>
              ))}
            </View>
            
            {/* Right Column */}
            <View style={styles.columnRight}>
              {rightColumnItems.map((item, index) => (
                <View key={index} style={styles.educationItem}>
                  {isEducationItem(item) ? (
                    <>
                      <Text style={styles.school}>{item.school}</Text>
                      <Text style={styles.degree}>{item.qualification}</Text>
                      <Text style={styles.duration}>{item.period}</Text>
                      {item.subjects && item.subjects.length > 0 && (
                        <Text style={styles.description}>
                          Subjects: {item.subjects.join(', ')}
                        </Text>
                      )}
                    </>
                  ) : (
                    <>
                      <Text style={styles.school}>{item.title}</Text>
                      <Text style={styles.degree}>{item.organization}</Text>
                      <Text style={styles.duration}>{item.period || item.issuedDate}</Text>
                      {item.description && (
                        <Text style={styles.description}>{item.description}</Text>
                      )}
                      {item.credentialId && (
                        <Text style={styles.description}>Credential ID: {item.credentialId}</Text>
                      )}
                    </>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Additional Information Sections */}
        <View style={styles.section}>
          <View style={styles.twoColumnSection}>
            {/* Left Column - Languages */}
            <View style={styles.columnLeft}>
              <Text style={styles.columnTitle}>Languages</Text>
              <View style={styles.infoSection}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>English</Text>
                  <Text style={styles.infoValue}>Bilingual proficiency</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Afrikaans</Text>
                  <Text style={styles.infoValue}>Bilingual proficiency</Text>
                </View>
              </View>
            </View>
            
            {/* Right Column - Work Preferences & Authorization */}
            <View style={styles.columnRight}>
              <Text style={styles.columnTitle}>Work Preferences</Text>
              <View style={styles.infoSection}>
                <View style={styles.bullet}>
                  <Text style={{ marginRight: 5 }}>•</Text>
                  <Text style={styles.bulletText}>100% remote</Text>
                </View>
                <View style={styles.bullet}>
                  <Text style={{ marginRight: 5 }}>•</Text>
                  <Text style={styles.bulletText}>Hybrid work in Pretoria, South Africa</Text>
                </View>
                <View style={styles.bullet}>
                  <Text style={{ marginRight: 5 }}>•</Text>
                  <Text style={styles.bulletText}>Office-based work in Pretoria, South Africa</Text>
                </View>
              </View>
              
              <Text style={styles.columnTitle}>Work Authorization</Text>
              <View style={styles.infoSection}>
                <View style={styles.infoRow}>
                  <View>
                    <Text style={{ fontSize: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>South Africa</Text> - Citizen
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Matthew Mollentze • Updated {formattedDate}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 2 }}>
            <Text>Visit my portfolio at </Text>
            <Link src={portfolioUrl}>
              <Text style={styles.linkText}>{portfolioUrl.replace('https://', '')}</Text>
            </Link>
            <Text> for more details</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export function PDFResumeButton({ isMobile = false }: Readonly<PDFResumeButtonProps>) {
  const currentDate = new Date().toISOString().split('T')[0]
  
  if (isMobile) {
    return (
      <PDFDownloadButtonWrapper 
        disabled={false} 
        timestamp={Date.now()} 
        className="w-full" 
      />
    )
  }
  
  return (
    <Button className="ml-1" asChild>
      <NextLink href="/resume">
        <FileDown className="h-4 w-4 mr-2" />
        View Resume
      </NextLink>
    </Button>
  )
}