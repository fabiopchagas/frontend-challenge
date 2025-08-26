export interface Contact {
  name: string
  email: string
  phone: string
  fax: string
}

export interface Document {
  type: string
  value: string
}

export interface PreOrderHeader {
  number: number
  serial: number
  buyer: string
  price: number
  currency: string
  createdAt: string
  status: string
  contact: Contact
}

export interface PreOrderDetails {
  code?: string
  name?: string
  readAt?: string
  lastReplyAt?: string
  document?: Document
  address?: string
  contact?: Contact
  label?: string
}

export interface PreOrder {
  header: PreOrderHeader
  supplier: PreOrderDetails
  addresses: PreOrderDetails[]
}
