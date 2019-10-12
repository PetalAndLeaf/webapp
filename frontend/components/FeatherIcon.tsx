import React from 'react'
import {
  Smile,
  Sun,
  Sunrise,
  Droplet,
  Package,
  X,
  ShoppingBag,
  Instagram,
  Facebook,
  Plus,
  Minus,
  Trash2
} from 'react-feather'

interface propsValue {
  icon: string
  style?: any
}

export default function FeatherIcon({ icon, style }: propsValue) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'smile':
        return <Smile className="icon" style={style} />
      case 'sun':
        return <Sun className="icon" style={style} />
      case 'sunrise':
        return <Sunrise className="icon" style={style} />
      case 'droplet':
        return <Droplet className="icon" style={style} />
      case 'package':
        return <Package className="icon" style={style} />
      case 'x':
        return <X className="icon" style={style} />
      case 'instagram':
        return <Instagram className="icon" style={style} />
      case 'facebook':
        return <Facebook className="icon" style={style} />
      case 'shoppingbag':
        return <ShoppingBag className="icon" style={style} />
      case 'plus':
        return <Plus className="icon" style={style} />
      case 'minus':
        return <Minus className="icon" style={style} />
      case 'delete':
        return <Trash2 className="icon" style={style} />
      default:
        return <Smile className="icon" style={style} />
    }
  }
  return getIcon(icon)
}
