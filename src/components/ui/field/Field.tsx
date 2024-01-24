import cn from 'classnames'
import { forwardRef } from 'react'

import styles from './Field.module.scss'
import { TypeTextAreaProps } from './field.types'

const Field = forwardRef<HTMLTextAreaElement, TypeTextAreaProps>(
	({ error, style, Icon, className, ...rest }, ref) => {
		return (
			<>
				<div className={cn(styles.field, className)} style={style}>
					<textarea ref={ref} {...rest} required rows={1} />
				</div>

				{error && <div className={styles.error}>{error.message}</div>}
			</>
		)
	}
)

Field.displayName = 'Field'

export default Field
