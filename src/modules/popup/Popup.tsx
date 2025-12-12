import type {Units} from '_scripts/index'
import {useEffect, useState} from 'react'

import Layout from '~/Global/Layout'
import ColorsUnit from '~~popup/ColorsUnit'
import FontsUnit from '~~popup/FontsUnit'

export function Popup() {
  const [units, setUnits] = useState<Units>()

  useEffect(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, {type: 'EXTRACT_UNITS'}, (response: Units) => {
        if(response){
          setUnits(response)
        }
      })
    })
  }, [])

  return (
    <Layout className="space-y-2.5">
      <ColorsUnit data={units?.colors} />
      <FontsUnit data={units?.fonts} />
    </Layout>
  )
}