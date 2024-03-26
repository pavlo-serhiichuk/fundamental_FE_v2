import React, { type ReactNode } from 'react'
import { PageError } from 'widgets/PageError/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return <PageError />
    }

    return this.props.children
  }
}

export default ErrorBoundary
