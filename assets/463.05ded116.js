const a=[.55,-.24,-.63,.13,-.74,.14,-.29,.23,-.17,-.3,-.39,-.07,0,.59,-.47,.11,-.15,-.04,-.06,.12,.13,.22,-.09,-.26,-.46,-.68,.13,-.15,-.28,.09,-.37,.26,-.68,.07,-.08,-.13,-.62,-.37,-.39,-.5,.15,-.71,-.46,-.01,-.23,-.2,-.14,.3,.09,-.21,-.12,.2,-.25,-.61,-.35,-.22,-.25,.14,-.25,-.63,-.31,-.7,-.65,.03,-.06,.09,-.73,-.41,.2,.13,.16,-.37,-.24,.2,-.67,.07,.19,-.31,-.42,.1,.58,-.49,.07,-.61,.03,.08,-.58,-.17,.67,-.54,-.09,-.17,-.1,.6,-.01,-.15,.77,.43,-.03,-.3,.1,-.67,-.47,.14,-.51,-.31,.11,.08,-.59,-.52,.16,-.3,-.01,.72,0,-.66,-.16,.15,.37,-.45,.03,.08,-.19,.07,.06,-.5,-.66,.31,.07,-.7,.16,.38,.04,-.11,-.09,.28,.01,-.14,.08,.21,-.71,.16,-.6,-.57,.27,.13,.01,.03,-.57,.13,-.68,.15,0,.09,.17,-.08,.01,.21,.27,-.42,0,-.63,-.09,-.36,-.12,-.3,-.35,.16,.03,-.57,.23,.15,.09,.3,-.52,.11,-.1,.02,-.12,-.69,.04,-.02,-.19,-.67,-.48,-.15,.16,.02,-.16,.18,.1,-.03,-.31,-.41,-.63,-.73,-.62,-.24,.22,.15,-.15,-.45,-.71,.26,.55,-.47,.07,-.19,-.16,-.07,.19,-.46,.06,-.59,.14,-.23,-.07,.09,.07,.2,-.4,-.42,-.43,-.65,-.4,-.72,.11,.07,-.29,-.21,.02,.1,-.42,-.66,-.44,.2,-.45,-.06,-.19,-.01,-.25,-.46,.2,.18,-.05,.28,-.17,-.01,-.07,.02,-.1,.01,-.4,-.32,-.75,-.06,-.23,-.22,-.11,-.65,.05,-.07,-.28,-.74,.18,-.48,.15,-.64,.03,-.38,.01,.43,-.65,-.66,-.59,-.13,-.09,-.18,-.63,.1,-.12,.18,-.22,.41,-.24,-.45,.02,-.58,-.12,0,.15,-.31,-.62,.14,-.03,-.49,-.08,.32,.11,-.1,.05,-.77,.06,.16,-.11,-.37,.02,-.48,-.08,-.14,-.62,.04,-.06,.25,-.3,-.1,-.06,-.13,-.65,-.37,-.61,-.05,-.5,-.69,.04,-.2,-.62,.18,-.05,-.21,.64,-.4,-.17,-.22,.21,.1,.1,-.31,.21,.16,-.31,-.58,.13,.11,-.66,-.69,-.19,-.13,-.5,-.05,-.64,.4,.06,-.21,.5,-.27,-.33,.1,-.69,-.69,-.25,-.06,-.18,.08,.13,.6,.06,-.71,-.31,-.05,-.14,.31,-.1,.13,-.27,-.25,-.37,-.62,.05,-.05,.01,-.12,-.03,-.07,-.12,-.3,.07,-.04,-.67,-.7,-.68,-.21,-.03,.09,.06,-.77,.32,.08,.18,-.09,-.01,-.06,-.68,-.2,-.15,-.17,-.45,-.69,-.58,-.47,-.65,.47,.16,-.68,-.11,.13,-.77,-.64,-.13,.26,.08,-.7,.05,-.2,-.19,-.69,-.69,-.23,-.13,.25,.18,.16,-.37,.11,.08,-.62,.27,-.69,-.77,-.52,-.64,-.58,-.61,.18,-.2,-.41,-.7,-.66,.15,.61,-.22,-.34,.78,-.03,.14,.09,.15,-.7,.09,-.46,-.69,-.63,1,-.19,.05,-.1,.31,-.1,.48,-.59,.04,-.69,-.21,.12,-.08,-.6,-.45,.02,-.69,.16,-.55,-.56,-.72,-.15,-.19,.04,-.42,.21,-.36,-.58,-.06,-.1,.25,.13,-.67,-.72,-.07,.04,-.54,.16,-.15,.17,-.62,-.38,-.67,.15,.03,-.52,-.66,-.33,-.71,-.01,-.64,-.12,-.17,.13,-.03,.06,-.2,-.64,.06,-.75,-.1,-.1,-.31,.24,-.09,-.25,.05,-.5,-.07,-.05,.23,.24,.25,.13,-.2,-.37,.2,-.18,-.03,-.23,-.22,-.06,0,.08,.17,-.04,-.61,-.14,.15,-.73,-.7,-.59,-.53,-.14,.35,.21,.26,.12,-.62,.06,-.12,.2,.15,.17,.08,0,-.12,-.07,-.66,-.65,-.08,.25,-.74,-.72,.14,.25,-.22,-.16,.06,-.02,-.65,-.02,-.47,-.55,-.73,-.52,.07,-.61,.15,-.05,-.05,-.64,.13,.77,-.58,-.67,-.14,-.05,-.6,-.67,-.74,-.04,-.61,.08,-.1,.26,-.07,-.09,-.07,-.51,-.11,-.01,-.01,.03,-.77,.27,.09,.21,-.05,.08,-.21,.04,-.06,.27,-.17,-.15,-.69,.36,0,.49,.13,-.2,-.47,-.36,-.6,.16,.31,.09,.11,-.59,.3,-.09,-.32,-.7,.26,-.62,-.2,-.46,.33,.81,.04,-.76,-.58,-.07,-.4,.2,.05,-.04,-.76,-.58,-.74,-.07,-.31,.06,-.14,-.03,-.45,-.57,-.22,-.11,.12,.14,-.43,.16,-.6,-.72,.46,.02,.16,.13,-.47,-.58,.1,.01,.59,-.66,-.65,.26,.15,.08,.05,-.05,.22,.28,-.14,.04,-.63,.46,-.62,.05,-.26,-.75,-.01,-.01,.29,-.36,.22,.12,-.71,.12,-.17,-.05,-.08,.12,.07,-.21,.15,.1,.07,-.65,-.56,.02,-.57,-.56,.15,.2,.52,-.66,.67,-.17,-.68,-.07,-.25,-.02,-.65,.15,-.2,.04,-.3,-.47,.32,0,.02,.56,-.2,-.6,-.14,-.4,.42,.04,.05,-.02,-.56,-.19,.01,-.32,-.43,-.06,-.36,.12,-.62,-.34,-.45,-.55,-.7,-.09,0,.17,.13,.05,-.66,.22,-.12,.43,-.17,.23,-.77,-.19,-.68,-.11,.08,-.69,-.64,-.66,-.31,-.22,-.06,-.07,.25,0,-.56,-.35,-.7,.11,-.74,-.57,.35,-.38,.1,-.11,.35,-.74,-.4,-.45,-.19,.22,-.1,-.05,-.02,.16,-.71,.28,-.56,.09,.62,.1,-.16,-.74,.16,.01,.17,-.74,-.01,-.72,.21,-.1,.03,.15,.02,-.72,.11,0,-.09,.03,.11,-.26,.02,.24,-.44,-.6,-.09,.16,.25,-.69,.02,.12,-.28,.12,.11,.12,-.21,-.09,.04,-.34,-.09,-.19,-.01,.12,-.47,-.71,.02,.27,.11,.06,.36,.19,.01,.29,.28,-.03,-.02,-.1,.09,-.08,-.23,-.06,.19,.15,.04,-.35,-.21,-.73,-.68,.11,-.09,-.25,-.73,.2,-.7,.35,.43,-.34,-.64,-.11,.42,.04,-.56,-.72,-.12,.09,-.08,.04,.28,-.53,.08,-.09,.19,.06,.31,.03,.07,.07,-.62,-.34,.19,.06,.27,-.02,.1,-.12,.31,-.43,-.74,-.71,.13,-.71,-.73,-.15,-.03,-.59,-.63,-.74,-.69,.77,-.26,.02,-.35,-.76,.19,-.04,0,-.59,.07,-.2,.17,-.65,-.08,-.04,.18,-.04,-.09,.02,.01,-.29,-.78,-.04,-.73,-.02,-.59,-.05,.18,.1,-.63,-.15,-.01,-.03,.51,.24,-.05,.3,-.38,.65,-.6,.16,.03,-.24,-.13,-.51,-.76,.19,.18,.06,-.09,.09,.25,.16,.21,-.21,-.38,.25,-.12,.21,.14,.02,.01,.09,0,-.18,.02,-.03,-.06,0,-.03,-.07,.34,-.18,.07,.11,.16,-.35,-.15,.01,.16,.09,-.22,.35,.15,-.09,-.67,-.24,-.21,-.46,.01,-.25,-.61,-.05,.13,-.11,0,.02,-.24,-.26,-.02,-.36,-.69,.13,-.33,.11,.13,-.74,.11,.03,.2,-.08,.06,.25,.06,-.43,.08,-.38,-.4,-.03,-.45,.33,.33,.13,.06,-.6,.04,.28,.07,-.5,-.21,-.04,.12,-.13,-.58,.11,-.14,-.02,-.17,-.71,-.01,-.38,-.62,.15,-.44,-.7,.2,.13,.05,-.01,-.16,-.13,-.11,.13,.15,-.5,.04,.22,-.73,.12,-.52,-.59,.16,-.09,-.69,-.69,.32,.37,.38,-.19,-.73,-.15,-.59,-.15,-.55,.03,-.09,-.26,-.35,-.06,.13,.06,.07,-.51,-.03,-.72,.13,-.5,.36,.09,.26,.16,.19,-.4,-.08,.15,.15,-.6,-.73,.18,-.05,-.74,-.63,.07,.18,.24,-.67,.06,-.06,-.34,-.71,.26,-.59,-.42,-.51,.26,.01,.38,-.04,-.61,-.15,-.03,.27,.15,.01,.29,-.36,-.44,.28,-.12,-.61,-.22,-.76,-.53,-.61,-.36,-.04,.06,.47,-.22,-.52,-.09,-.65,.01,-.38,.04,.14,.05,.02,.2,.35,.12,-.73,-.67,-.01,-.64,-.11,.2,.45,-.07,-.77,.2,.19,-.65,-.68,.28,.04,-.39,.16,-.72,-.27,-.66,.2,-.62,-.58,.11,-.71,.09,.13,.22,-.52,-.14,.28,-.64,-.61,.01,.07,-.6,-.27,.27,.25,-.09,-.23,.11,-.12,-.04,.08,.21,-.64,-.14,-.72,-.47,-.62,.08,.15,.25,-.68,-.73,-.65,.2,.25,.05,.26,-.29,-.53,.21,-.66,.16,.18,-.08,-.04,.13,-.35,.12,.31,-.61,.85,-.73,.14,.23,-.1,-.23,.13,.11,-.15,.26,-.61,.11,-.61,-.09,-.08,.33,-.39,.41,.16,.23,-.54,.24,-.32,.05,-.11,.18,-.76,-.04,.07,.18,-.02,-.59,-.74,-.44,.26,-.13,.04,-.66,-.44,-.54,-.6,-.34,.18,-.04,-.09,-.51,-.17,.08,-.72,.05,-.38,-.72,.62,-.39,-.06,-.2,-.21,-.39,-.71,.14,-.09,.06,.03,.28,0,-.18,-.67,-.72,-.52,.22,.04,-.7,.15,-.21,-.11,-.15,.34,.15,.02,-.57,-.22,.11,.24,-.31,-.1,-.01,-.19,-.47,.36,.17,-.18,-.14,-.49,-.38,-.35,-.16,-.09,-.23,.01,-.02,-.38,-.49,-.22,.15,.35,.1,-.52,-.18,.14,.23,.43,0,-.13,-.57,-.25,.17,.31,.32,-.17,.35,.07,.23,.14,0,.04,-.3,-.34,0,-.41,-.65,.01,-.43,-.05,-.37,-.68,-.23,.17,.08,-.72,.27,-.02,-.02,-.09,-.63,-.47,-.42,.06,-.33,.25,.12,-.68,-.68,-.01,-.15,-.01,-.6,-.02,.05,-.16,.13,-.2,-.02,.23,-.06,.3,-.03,-.53,.18,-.08,-.61,.37,-.18,-.69,-.23,-.69,-.57,.03,.48,-.2,-.23,-.31,-.39,.33,-.71,.18,.16,.11,.05,.02,-.27,.63,.33,-.21,-.42,-.71,-.47,-.55,-.03,.09,-.05,.2,-.02,-.17,.17,-.3,-.65,-.15,.22,-.35,-.35,-.14,.28,.45,.12,-.61,.3,-.63,-.44,-.42,.02,-.14,-.32,-.04,-.39,.08,-.6,-.39,.14,.02,-.28,.25,-.65,-.22,-.12,-.13,-.42,-.09,-.15,-.15,-.43,.11,0,-.71,-.15,.32,-.36,-.66,-.25,-.19,-.22,-.39,-.24,-.03,-.33,.08,-.29,-.73,.19,-.46,-.28,-.08,-.16,-.33,-.2,.05,-.31,-.75,.26,-.14,.1,.1,-.53,-.16,-.19,-.61,.12,-.08,-.55,-.4,-.76,-.69,-.09,-.67,-.72,-.68,-.18,.01,.06,-.48,-.11,-.51,.03,-.63,-.62,.23,-.15,-.58,-.29,-.61,-.43,-.13,.31,-.66,-.45,-.3,-.02,-.51,-.28,-.45,-.05,-.68,-.69,-.34,-.62,.22,-.47,-.06,.05,-.51,-.46,.27,0,-.71,-.49,-.58,-.14,-.21,-.41,-.7,-.67,-.68,.12,.17,-.12,-.11,.06,-.66,-.06,0,-.48,-.01,-.38,-.41,-.23,-.59,-.64,.26,.05,-.55,-.12,-.28,-.67,.09,.1,-.43,-.21,-.31,-.57,-.33,-.66,.19,-.64,.25,-.39,0,-.1,-.05,.01,.06,-.23,-.65,-.21,-.46,0,-.38,0,-.05,-.7,-.46,-.6,-.46,-.62,.02,.11,.07,-.23,-.33,-.05,.21,-.58,-.53,-.68,.01,-.51,.04,-.07,-.36,0,-.43,.07,-.19,-.71,-.73,-.67,-.7,-.02,-.63,-.32,-.56,-.27,.34,-.44,-.16,.42,-.58,.06,-.62,-.07,-.61,-.51,.02,-.71,.15,.01,-.19,-.19,-.16,-.32,-.17,.13,.05,-.1,-.12,-.03,-.07,-.72,-.73,-.36,.04,-.65,-.4,-.42,-.57,-.56,-.74,-.02,.27,.11,-.58,.05,.38,.18,-.25,-.32,-.17,-.75,-.61,-.48,.1,-.56,-.49,.15,-.25,.02,-.73,-.41,-.2,.46,-.12,-.08,.11,-.03,-.12,-.66,-.5,-.49,.18,-.36,-.19,-.68,.25,-.2,.16,-.17,-.71,.09,-.67,-.44,-.65,-.68,.01,-.49,-.46,-.63,.1,-.18,.09,-.27,.45,.09,.11,.59,.05,.37,.07,.1,.2,.02,-.55,-.44,.02,-.68,-.7,.36,-.64,.34,.15,.47,.02,-.8,-.7,-.76,-.47,.05,-.42,-.36,-.44,-.4,-.36,-.09,-.69,-.71,-.56,-.39,-.34,-.34,.02,-.47,-.7,-.63,-.05,.03,.04,.01,-.63,-.05,-.44,.21,-.34,-.7,-.6,-.6,-.7,-.7,-.7,-.01,-.58,.11,.36,-.64,-.06,.16,.12,-.57,-.62,-.58,-.18,-.23,-.51,-.33,-.71,-.3,0,-.12,.04,.26,.31,-.46,.35,-.06,.19,-.68,.04,-.46,.28,.11,.03,.03,.25,.18,-.67,.04,-.01,-.4,-.27,-.25,-.59,.28,.37,.29,-.02,-.52,-.12,.11,-.56,-.4,-.27,.15,-.68,.1,-.64,0,-.7,-.05,-.29,-.25,.02,-.28,-.1,-.22,.25,.51,.02,.15,-.53,-.6,-.66,-.47,.3,-.15,-.6,-.24,-.28,.13,.17,.31,-.65,-.72,-.19,-.42,-.73,-.39,-.22,.02,-.72,-.71,.1,.17,-.25,-.28,-.34,-.04,.29,-.42,-.18,.11,.09,-.74,.16,.02,-.61,-.07,-.07,-.52,-.15,.2,.03,-.64,.58,-.5,-.04,0,.19,.09,-.55,-.37,.31,.06,-.16,-.02,-.65,-.75,-.65,-.01,-.58,-.66,-.71,-.55,-.66,-.27,-.03,-.3,-.71,-.18,-.14,.2,.17,.11,-.69,-.63,.36,-.53,.07,-.24,-.69,-.02,-.06,.16,-.05,.37,.41,.05,-.14,-.5,-.73,-.43,-.68,-.43,.14,-.38,-.28,-.2,-.02,.05,-.36,-.5,-.63,.03,.28,.69,-.28,-.57,.01,-.69,-.25,-.72,-.15,-.15,-.47,.77,-.7,-.72,-.75,.07,-.57,-.16,-.72,-.51,.04,-.47,-.67,-.56,-.39,-.7,-.71,-.55,.02,-.71,-.21,-.29,.15,-.66,-.73,-.69,-.75,-.75,.26,-.71,-.5,-.08,.47,-.71,.23,-.74,.4,-.08,-.65,-.29,-.74,-.7,.07,.05,-.04,.2,-.7,-.02,-.5,-.34,-.61,.1,.12,-.09,.13,-.16,.16,-.26,-.04,-.13,-.71,.21,-.2,-.43];export{a as rvalData};
