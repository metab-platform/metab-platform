const a=[-.09,.16,-.06,-.05,-.01,-.18,-.06,-.59,-.09,-.36,.03,.16,.06,.12,.19,-.05,0,.11,.18,-.1,.19,.7,-.15,.39,.09,.02,.84,-.14,.12,.89,-.26,.71,-.09,-.31,.22,-.02,.16,.28,-.03,.06,.11,0,-.18,.09,-.14,.29,.22,.24,.71,-.54,-.1,.08,.24,.1,-.52,.03,.06,-.4,.17,-.09,-.72,-.06,-.17,-.11,.47,.72,-.07,.41,.25,.02,-.02,.14,-.74,.16,.07,-.04,.26,-.78,.08,.42,.1,-.03,-.04,.06,.21,.64,.03,-.02,.06,.08,-.45,-.02,-.5,-.09,.11,-.05,.04,.14,.18,-.76,-.07,-.12,-.25,-.16,-.38,.01,.36,.49,.05,-.27,-.12,-.53,-.08,-.02,.36,.26,.02,.72,.27,-.08,-.03,.31,-.22,-.06,-.13,-.43,.08,.05,.41,.14,-.57,-.09,-.08,-.64,.17,.27,-.61,-.2,.75,-.12,-.15,-.18,-.22,.01,-.15,-.13,-.03,.01,-.24,-.03,-.16,-.65,.02,-.08,-.57,-.44,.37,.12,-.01,.24,-.6,-.29,-.14,-.5,-.55,-.86,-.15,.66,-.27,-.08,-.09,.44,-.59,-.45,-.15,.71,-.07,.89,-.82,.03,.1,.03,-.17,.2,-.44,-.14,.04,-.09,-.67,-.02,0,-.77,.13,-.48,-.49,.05,-.33,-.18,.07,.58,.01,-.38,.08,.04,.06,-.41,-.08,-.59,-.67,.05,-.62,.34,.12,.21,-.37,-.44,-.02,-.57,.71,.65,-.09,-.31,-.19,.05,-.13,.09,-.69,.69,-.28,-.36,-.08,-.11,.38,-.03,.07,-.14,.32,.27,-.2,0,-.67,.4,-.48,-.61,-.52,-.47,.06,-.29,.14,-.05,-.58,.39,-.53,-.15,-.14,.13,0,-.42,-.24,.15,.16,-.25,-.51,-.15,-.16,-.37,.23,.01,-.17,-.07,.54,-.17,.05,-.09,.06,.07,.86,-.78,-.2,.71,-.78,.75,-.03,.05,-.25,-.13,.69,.15,-.39,.74,-.48,-.64,-.03,-.42,-.38,-.22,-.05,.15,-.35,-.28,-.14,.08,.62,-.06,-.07,.05,.42,-.42,-.34,.05,-.17,-.13,.14,-.14,.13,-.28,-.28,-.39,-.11,-.37,-.02,.23,.32,-.03,-.36,-.26,.07,.11,.05,-.24,.06,-.1,.08,0,.69,.16,.59,-.17,-.19,.49,-.59,-.16,.1,.19,.22,-.07,-.16,-.68,-.18,-.31,-.31,-.59,-.09,-.25,.13,0,-.3,.21,-.23,.07,-.01,-.21,-.24,.51,.03,-.07,-.04,.08,-.64,-.01,.76,-.06,-.08,-.25,-.75,-.29,.1,-.03,.02,-.46,.11,.06,.07,-.08,-.03,-.06,.1,.07,0,.03,-.21,.01,-.07,-.37,-.32,.08,.61,-.01,.03,-.11,.31,-.08,-.21,-.1,-.64,.02,.3,-.21,-.21,.05,-.07,.09,-.14,-.21,-.19,.01,-.14,.24,-.79,.09,-.21,.16,.54,-.04,-.09,.17,.09,.02,-.41,-.37,-.49,-.21,-.07,-.13,-.64,.08,-.21,.01,.03,-.45,-.26,-.11,-.2,.05,-.48,-.34,.11,-.03,-.14,.41,-.38,-.49,.12,.03,.01,-.16,.85,.11,-.36,-.38,-.08,-.13,.03,-.8,-.04,.11,-.03,-.07,.13,.1,.46,.12,-.08,.01,-.53,-.03,-.27,-.52,.06,.85,-.33,.24,-.01,-.47,-.57,-.04,-.4,-.31,.18,-.07,.08,.14,.15,-.2,-.15,.11,-.35,.08,-.24,-.47,-.34,-.04,-.19,.02,-.09,-.15,-.06,-.07,.22,-.78,-.32,-.11,-.15,-.18,-.49,.53,-.61,-.43,-.78,.02,.25,-.02,-.01,-.08,-.17,-.04,.16,-.11,-.06,-.16,-.65,-.35,-.13,-.41,-.1,-.34,-.3,.11,-.25,.25,.15,-.4,.14,.94,.24,.02,-.22,.97,-.1,.11,.71,.1,-.06,.03,-.33,.08,.23,-.34,.07,.05,.01,.59,.01,-.52,-.03,-.04,-.09,.09,-.64,.02,-.16,-.01,-.25,-.19,-.01,.06,.02,.38,-.67,.11,.28,-.01,-.3,-.09,-.52,.35,.05,-.24,.49,.19,-.08,.01,.14,-.23,-.53,.01,-.24,0,-.34,-.4,-.2,.02,-.05,-.41,0,.81,-.51,.33,.03,.17,-.02,.24,-.08,-.77,-.02,-.05,.06,-.48,.18,-.03,-.37,-.2,-.28,-.06,-.23,.16,-.29,-.32,-.23,-.35,.05,.18,.09,-.78,.04,-.38,0,-.62,-.44,.7,-.32,-.12,.57,-.08,.06,-.1,-.27,0,.27,-.52,.12,.16,-.4,.05,-.03,-.15,.36,.12,.02,-.03,.08,-.18,.09,-.4,.13,0,.11,-.1,-.13,-.07,-.08,.06,.05,.9,-.28,-.53,-.33,.05,.01,-.07,-.13,-.14,-.02,-.02,-.47,-.17,.18,0,-.04,-.46,-.05,.04,-.13,.06,-.23,-.03,-.18,-.22,-.13,.07,.02,-.56,-.48,-.08,-.06,.07,.01,.16,-.09,.84,-.19,-.5,-.32,-.47,-.12,-.12,.03,-.03,.05,.01,-.5,-.09,.17,-.04,.06,.18,.04,.51,.11,-.05,.21,-.29,.02,.16,-.43,-.64,.2,-.08,0,-.08,.32,-.1,.58,.98,.03,-.04,-.06,.24,-.14,-.64,.05,.61,.28,-.13,.09,-.19,.44,.63,-.02,.06,-.08,.76,.04,-.22,.61,.16,-.09,.03,.38,-.1,-.33,-.37,-.03,-.15,-.52,.08,-.34,-.57,.08,-.46,-.03,.43,.05,-.04,-.07,-.3,-.43,-.84,.13,.52,.67,-.11,-.29,.41,.04,.59,.06,-.2,.04,-.51,-.02,.03,.27,-.24,.09,.01,-.41,.15,-.35,.11,.07,-.02,.02,.46,-.06,-.5,.06,.7,.09,.08,.17,-.03,-.51,.11,-.04,.1,.18,-.27,.17,-.07,-.1,.09,-.36,.11,-.03,.53,.07,-.38,-.09,.71,-.33,-.01,-.01,-.58,.36,-.16,.46,.66,-.57,.1,.01,.73,-.19,.06,.17,-.05,-.39,-.38,-.56,.48,-.44,.04,.37,.09,-.19,-.43,.33,-.07,-.28,-.47,-.11,-.07,0,-.51,-.5,-.42,.2,-.3,.17,-.22,.85,-.21,-.01,-.09,.18,-.27,-.62,.19,-.17,-.4,-.03,-.07,.09,-.52,.02,-.02,.1,-.05,-.15,-.05,-.18,.26,.1,-.02,-.05,-.02,.07,-.61,.02,-.63,-.24,1,.46,-.39,-.26,-.21,-.12,-.47,-.49,-.08,-.49,.23,-.04,.11,-.17,-.05,-.22,.07,-.01,-.35,-.78,.02,.23,-.04,-.06,.05,-.76,.05,-.23,-.03,.16,.32,-.24,-.09,-.1,-.15,-.55,0,.07,.13,-.48,-.09,.05,.43,-.43,.01,-.08,-.09,-.04,-.22,.07,.09,-.34,-.12,-.2,-.04,-.11,-.34,.12,.01,.53,-.15,.34,.14,.07,-.12,-.04,-.25,-.81,-.16,-.02,-.54,.68,-.53,-.52,-.48,-.44,-.01,-.01,-.43,-.47,-.5,-.62,-.45,-.06,-.57,-.05,-.11,-.21,.08,-.04,-.01,-.02,-.17,-.03,.32,.1,-.12,.05,.06,.28,-.58,-.39,.77,-.28,-.12,-.45,-.21,-.2,.13,-.11,-.11,-.18,-.47,.02,-.24,-.23,-.17,.01,.06,-.52,.04,0,-.18,-.08,-.51,.16,-.61,.2,-.01,-.22,.08,.68,.01,0,-.52,.06,.01,.15,-.04,-.54,-.29,-.02,-.48,.04,.05,.22,-.06,-.47,.05,.78,.06,-.38,.22,-.82,-.26,.63,-.05,0,.01,-.52,-.52,-.43,.08,.26,-.14,.12,-.28,-.27,.02,-.1,.64,-.06,-.02,-.78,.62,-.15,.07,.7,-.07,.26,-.15,-.1,.55,-.05,-.25,-.49,.03,-.05,0,-.42,.36,-.57,-.11,0,-.1,-.09,-.02,-.09,.22,.19,-.73,-.81,.08,.53,.5,0,.18,-.5,.05,.02,.39,.17,-.04,.2,-.02,.03,.42,-.38,.24,-.47,-.04,.07,.05,0,-.02,-.03,-.42,-.17,-.24,.09,.27,-.12,-.32,-.16,-.16,.14,.36,-.16,.01,-.06,.07,-.6,-.09,.05,-.41,-.12,-.38,-.22,-.1,-.13,-.43,.1,-.72,.03,-.15,.01,0,-.21,-.39,-.44,-.02,.24,-.21,-.43,.07,.26,.04,-.12,.09,-.54,.09,.12,-.36,.1,-.12,.14,.22,.37,.04,.24,-.52,-.25,.33,-.07,.02,-.01,-.23,-.23,.13,.24,-.31,-.17,-.11,-.12,-.29,-.14,-.02,.03,-.69,-.07,.19,.06,-.35,.11,-.32,.07,.03,-.06,-.51,-.21,-.17,-.16,-.16,-.17,-.38,-.02,.88,-.24,-.34,.76,-.29,-.22,.13,-.05,-.32,-.07,-.02,-.03,-.16,.21,.06,-.03,-.01,-.14,-.16,.04,.12,-.11,-.1,-.09,-.17,-.02,-.39,.01,-.04,-.27,.37,-.5,-.25,.15,.05,-.18,-.26,.61,-.35,.79,.72,-.62,.04,.14,.03,-.17,.33,-.19,-.47,.13,.04,-.37,-.07,-.33,-.15,.01,-.53,.04,-.09,.03,.15,.07,-.08,-.2,-.03,-.17,-.49,-.33,-.5,.39,-.25,-.14,-.52,.07,-.39,-.18,-.05,.25,.39,-.84,-.47,.07,.35,-.34,.07,-.05,-.31,.08,-.12,-.63,-.2,.18,-.18,-.25,-.02,.07,-.35,-.36,-.28,.08,-.09,-.16,.8,.28,-.08,-.46,.02,.17,-.01,-.5,.08,0,-.31,-.4,-.09,.15,.46,-.21,-.18,.13,-.5,.07,.08,-.72,-.44,-.25,-.1,-.15,-.28,-.42,-.54,-.33,-.49,-.22,-.16,0,-.1,-.18,-.21,-.28,-.48,.04,.22,.12,-.19,-.39,-.07,-.26,.01,-.1,-.17,-.15,-.2,.2,-.27,-.23,.2,-.46,-.36,.15,.06,-.53,-.17,-.31,-.19,-.27,-.57,.14,.24,-.59,-.01,-.01,-.02,-.62,.02,.22,-.01,-.01,.34,.02,-.72,.36,-.11,-.22,-.04,-.15,-.12,-.22,.21,-.28,.25,-.28,0,.34,-.11,-.02,-.62,-.08,.11,.07,.12,.2,.18,-.05,-.38,-.14,-.46,-.12,-.01,-.07,.07,-.74,-.04,-.48,.44,-.38,-.06,-.06,-.38,-.01,.06,.09,-.03,-.01,-.17,.14,-.08,0,-.02,.05,-.53,.45,-.03,.09,-.36,.03,.49,-.45,-.17,-.19,-.09,-.05,-.06,-.65,.18,-.15,.65,-.31,-.15,-.36,-.17,-.45,0,-.3,-.11,-.08,-.06,-.33,.03,-.48,-.09,0,-.46,-.35,-.3,-.39,-.24,-.12,-.18,0,-.02,-.09,-.21,-.01,-.47,-.06,-.65,.25,-.47,.07,-.2,-.3,.04,-.07,.1,.15,-.61,-.11,-.01,-.1,-.16,-.23,.22,-.46,-.47,-.36,-.33,.18,.03,-.1,-.07,.07,.63,-.23,-.22,-.44,.08,-.37,-.01,-.4,0,-.6,.02,-.06,-.67,-.18,-.33,-.2,.11,-.31,-.5,-.13,.08,-.03,.09,-.19,-.25,-.1,-.41,-.05,.19,-.1,-.16,-.04,.24,-.17,-.27,-.19,-.68,-.03,-.47,.43,.1,-.05,-.11,-.04,-.06,-.16,-.24,-.63,.58,-.52,.36,-.46,-.09,-.22,-.15,-.39,-.71,-.59,.17,-.08,-.04,-.11,.55,.46,-.56,-.17,-.47,.25,-.73,-.1,.08,.32,-.1,.15,-.41,.14,-.05,-.01,.44,.08,-.51,-.51,-.04,-.03,-.06,-.27,-.21,-.6,-.22,-.42,-.18,-.12,-.13,-.01,-.47,0,-.36,.06,-.04,.01,.07,.03,-.07,-.03,-.25,-.55,.01,-.6,-.28,-.15,-.16,-.17,0,-.18,-.11,-.46,-.62,.05,-.17,-.01,-.02,-.41,-.17,-.07,-.15,-.18,.17,-.44,-.78,-.21,-.43,-.06,.03,.09,-.22,-.05,-.43,.12,-.51,-.48,-.44,.02,-.4,.1,-.32,-.18,.11,-.31,.09,-.04,-.35,.04,-.08,.18,-.68,.28,-.6,-.02,.14,-.41,-.52,.12,-.46,-.29,.12,-.03,-.07,0,.37,-.61,-.12,.28,.18,-.09,.05,.14,.17,-.23,-.11,.04,0,.09,-.02,-.55,-.43,-.46,.05,-.05,.15,.17,.05,-.38,.51,-.19,.57,-.08,-.31,-.44,.07,.22,.05,.11,-.2,-.19,0,-.41,-.3,-.3,-.45,-.63,-.02,-.14,-.13,-.13,-.07,-.24,.12,.07,-.08,.07,.05,.07,-.44,-.03,-.14,.79,.06,.02,.21,.03,-.09,-.47,.17,.29,-.4,.13,-.06,-.03,.11,-.29,-.37,-.02,.08,.1,-.14,-.06,-.29,.81,.46,.1,-.09,.09,0,.01,.13,-.05,-.2,-.22,-.54,-.16,-.23,-.21,.06,-.05,-.7,-.48,-.4,.19,-.44,.05,-.24,-.35,.75,.45,-.06,-.03,-.12,-.53,-.1,-.25,.15,-.27,-.07,.1,.18,-.18,-.02,-.27,-.07,.19,-.23,-.44,-.16,-.45,.02,.07,-.32,-.22,-.39,-.08,-.33,-.05,-.06,-.11,.04,-.2,-.16,-.18,.03,-.48,-.43,-.27,0,.04,.13,-.06,-.6,.46,.07,.17,.11,.06,-.1,-.47,.04,-.45,.06,-.11,-.25,-.45,-.01,.05,-.15,-.02,-.69,-.32,-.46,-.03,-.25,-.01,.05,.02,.18,.09,-.45,-.56,-.63,0,.06,.05,-.33,-.07,-.21,.04,.02,-.21,-.15,-.21,-.08,.08,.52,-.2,-.6,-.17,-.15,.04,.01,.02,.06,-.17,.04,0,0,-.3,.07,-.15,-.02,.77,-.54,-.38,-.69,-.21,-.09,.3,-.34,.15,-.13,.05,.02,-.11,.06,-.03,-.61,.02,-.38,-.09,.05,-.03,-.13,.27,.29,-.37,.07,-.17,.01,.16,-.29,-.08,.05,-.45,-.34,.13,.03,-.06,.36,.04,.19,.08,.01,.05,-.2,-.35,-.36,.03,-.35,.29,-.15,.07,-.07,-.04,-.08,-.33,.08,.43,.05,.15,.39,-.43,-.15,-.12,.39,.1,.42,.02,-.08,.01,-.08,-.01,-.62,.07,-.48,.01,.56,-.16,.31,.27,-.13,.16,-.21,-.15,.12,-.3,.3,.13,-.16,-.38,.02,-.17,-.04,-.17,.11,-.02,-.16,.06,.12,-.23,-.3,-.13,-.09,-.5,-.06,0,0,-.25,.09,.03,.22,.28,.09,.45,-.36,.18,.06,.04,.03,.11,-.02,-.24,-.27,.29,-.07,.17,.13,-.14,.11,-.17,-.05,-.25,.06,0,-.14,.32,-.03,.74,-.64,-.08,-.23,-.1,-.07,-.12,.01,.8,-.04,.45,.2,-.12,-.1,.39,-.13,.05,-.17,.11,-.45];export{a as rvalData};
