const a=[.23,-.09,-.24,.04,-.21,.16,-.04,.6,.09,.15,-.29,-.07,-.06,.01,-.41,.11,-.09,-.13,-.06,.12,-.06,-.6,.15,-.47,-.24,-.11,-.65,.19,-.09,-.66,.2,-.5,-.1,.12,-.42,.06,-.25,-.36,.1,-.04,-.07,-.11,-.04,.08,.01,-.29,-.18,-.12,-.52,.53,.11,.08,-.06,-.21,.52,-.17,-.11,.39,.11,-.27,.52,.02,.06,.02,-.28,-.58,-.04,-.47,-.05,0,.14,-.15,.59,-.21,-.2,-.12,-.19,.53,-.24,-.45,.07,-.27,0,-.09,-.11,-.62,-.1,-.05,.14,-.27,.59,.02,.45,.41,-.12,.16,.16,-.1,.01,.5,-.04,-.01,.26,.04,.36,-.12,-.2,-.27,-.09,.2,0,.64,.2,.27,-.13,-.33,-.34,-.49,-.12,-.09,.07,-.4,.08,.01,.3,.26,-.13,-.11,-.43,-.26,.71,.48,.09,.72,-.23,-.08,.82,.23,-.5,-.01,.08,.05,.18,-.07,.17,.15,.07,.09,.14,-.09,-.05,.52,.05,.07,.72,.55,0,.06,-.01,-.41,.68,.16,.02,.32,.4,.51,0,-.5,.27,-.19,.13,-.45,.71,.65,.03,-.6,-.01,-.66,.6,-.23,-.22,-.08,.14,-.38,.41,.08,-.01,.16,.54,.06,.03,.6,-.21,.28,.26,-.2,.11,-.05,.01,-.41,-.08,.23,-.22,.14,.1,.25,.25,.6,.62,-.01,.74,-.43,0,-.28,.36,.23,.05,.63,-.61,-.26,.17,.31,.08,-.2,.2,-.24,.78,-.48,.35,.27,.11,-.04,-.22,-.24,-.22,.14,-.39,-.25,.21,.01,.73,-.51,.7,.85,.52,.63,-.09,.3,-.14,.02,.46,-.3,.53,.08,.01,-.11,-.02,.06,.24,-.38,-.03,.48,.2,.04,.28,.33,-.32,.02,0,-.02,-.26,.15,-.16,-.14,-.17,-.05,-.61,.66,-.1,-.52,.79,-.36,-.24,.1,.49,.09,-.46,-.25,.3,-.47,.39,.59,-.05,.53,.34,-.06,.02,-.02,.37,.41,.19,-.31,-.46,.05,.02,.08,-.07,.47,.41,-.14,-.03,.03,-.19,.15,-.04,.41,.4,.56,-.17,.22,.01,.05,-.46,-.07,.59,.5,-.04,.12,.03,.48,.09,.19,.09,-.16,-.47,-.18,-.58,.32,.26,-.32,.57,-.18,.09,-.01,-.29,-.12,.07,.69,-.02,.67,.18,.83,.1,.49,.23,-.25,.28,-.18,-.07,-.35,-.09,.07,.43,-.28,.06,.13,.2,-.23,.41,-.02,-.67,0,.03,.22,.41,.38,-.06,-.09,0,.61,.01,-.07,0,.08,.02,.05,-.15,-.07,-.05,-.06,-.04,-.12,-.1,.26,.19,-.3,-.43,-.03,.13,.21,-.2,.33,-.06,.09,.52,-.11,-.41,-.01,.09,.06,-.16,.07,.27,-.04,.33,.15,.04,-.43,.78,-.01,.22,-.28,-.37,-.12,-.3,-.27,-.22,-.17,.45,.7,.65,.22,-.08,.07,.72,-.27,.26,-.06,-.21,.18,.18,0,.19,-.03,.48,.35,-.3,.01,.1,-.19,.32,.4,.08,.2,-.05,.14,-.62,-.19,.39,.09,-.2,.07,.2,.58,.21,-.01,.08,-.03,.02,-.21,-.27,-.28,0,.01,.71,-.12,.12,.36,-.18,-.48,.17,-.34,-.15,.33,.52,.32,.24,.41,-.3,-.23,-.1,-.08,.05,.42,-.09,-.28,.46,-.09,-.08,.76,.65,.12,.02,-.23,-.02,.19,.14,-.03,-.23,.58,.09,.35,.1,.22,.53,-.47,.54,.7,.63,-.22,-.29,-.22,.07,.03,.08,.08,.23,.06,.12,.18,.69,.47,.19,.84,.16,.2,.38,-.07,.26,-.13,-.06,.54,-.14,-.56,-.3,.06,.39,-.57,0,.07,-.45,-.24,-.14,-.22,.16,0,-.27,.68,-.07,.12,-.11,-.56,.31,.59,.12,.07,.11,-.11,.57,-.12,-.07,-.24,-.04,.54,-.2,-.28,-.13,-.14,.56,-.3,-.31,.1,.13,.28,.38,-.5,-.28,.09,-.33,-.29,.08,-.09,-.03,.02,.59,.16,-.09,-.3,.32,.44,-.16,-.21,-.26,.54,-.2,-.68,.74,-.16,.02,.01,-.06,-.3,.1,.6,.07,.16,-.28,.64,-.16,.18,.32,.3,.28,.02,.45,-.01,.35,.39,.06,.59,-.07,-.01,-.07,.63,-.01,.29,-.13,.92,.61,-.57,.4,-.12,-.39,.14,-.28,.05,.39,-.04,-.25,.4,-.05,.06,.69,-.23,-.12,.1,-.45,-.14,-.07,.06,-.28,-.1,-.16,.61,-.04,.17,-.01,.36,.05,-.11,.07,-.05,-.07,-.6,.3,.78,.17,-.26,0,.08,.17,.19,-.17,-.08,.41,.24,.11,-.03,-.06,.44,.09,.07,.3,-.11,.13,.14,.08,.13,0,.14,-.05,.48,.29,-.18,.18,-.16,.01,-.44,.17,-.69,-.05,.75,.36,.43,.03,-.07,.13,.16,-.05,-.07,.48,.03,-.25,.09,-.23,-.4,-.05,-.62,.11,-.18,.02,.47,-.07,-.15,.51,.82,-.3,.04,.06,.11,-.38,-.06,-.41,-.65,.07,.14,.07,-.33,.34,.4,.1,-.33,-.18,.22,-.18,.06,-.12,-.55,.01,-.13,-.28,-.47,-.19,-.01,-.55,-.34,.02,-.01,-.31,.1,.47,.5,-.1,.14,.68,-.05,.36,.6,-.19,.6,-.26,-.22,0,.06,-.21,.16,.52,.58,-.14,-.53,-.57,.34,.08,-.44,-.16,-.49,-.23,.2,.21,.26,.14,.01,-.15,-.03,-.17,.07,.34,-.12,.55,-.14,-.04,.16,-.04,-.47,.14,.71,.15,-.52,-.15,-.25,-.01,-.01,.6,-.26,-.02,-.26,-.02,.37,-.16,-.06,.16,-.24,.47,-.01,-.04,-.34,-.15,.36,.08,-.54,.22,-.25,-.06,.79,-.42,-.12,-.28,-.46,.53,-.11,.08,-.64,.18,0,.03,.12,.58,.57,.5,-.33,.25,-.2,-.17,.02,.25,.62,-.25,.13,.53,.79,.33,.05,.06,.68,.38,.59,-.09,.31,.12,.14,-.62,.07,-.04,0,-.33,.27,.47,-.03,.03,.58,-.01,.09,-.05,.5,.03,.03,.09,.01,-.05,-.17,.09,-.05,-.02,-.07,.08,-.09,-.02,.82,.03,.77,.13,-.64,-.5,.41,.09,.2,.26,.65,.8,-.04,.4,-.24,.28,-.19,.02,-.22,.2,-.29,-.16,.54,.62,-.15,-.31,-.16,-.08,.2,.59,-.02,.12,-.14,-.08,.06,.33,-.01,.37,.19,.59,-.13,-.06,-.09,.64,-.08,.22,-.13,.7,-.13,-.09,.01,-.1,.03,-.12,-.16,.58,.01,.03,.04,.09,.28,.04,.11,-.42,.24,-.62,.1,-.14,-.02,.26,.35,.7,.05,-.18,.73,-.54,.62,.47,.62,.76,.1,.08,.35,.49,.75,.74,.67,.06,.64,-.13,.19,-.07,-.07,.06,.02,-.04,.17,.02,-.45,.09,-.07,-.08,.12,-.08,.33,.33,-.47,.29,.1,.38,.38,.3,-.17,-.06,.1,.04,.47,.09,.29,.1,.02,.08,-.21,.73,-.17,-.09,.43,.02,.47,-.28,.48,-.06,.01,.65,-.31,-.59,.05,.16,.7,.04,.1,-.18,-.06,.64,.18,-.07,.48,-.16,.01,-.06,.29,.38,-.13,-.44,.08,.22,-.32,.59,.21,-.54,.11,-.21,.05,.55,.49,.33,-.25,-.19,.24,-.29,.71,.13,-.22,.11,-.49,.02,.03,.62,-.45,.06,.09,-.6,0,-.13,.32,-.12,-.47,-.24,.12,.59,.24,-.07,-.11,.45,-.27,.81,-.01,-.29,.09,-.07,-.07,-.01,-.02,-.2,.63,.59,-.09,-.44,-.4,.06,-.31,.48,-.21,-.26,-.49,-.07,0,-.14,.24,.13,-.5,.6,-.16,.66,-.03,-.25,.03,-.09,-.23,-.09,.42,.18,.14,-.16,-.34,-.07,-.07,.06,.16,-.25,-.25,-.11,.32,.04,-.09,.55,-.15,-.11,.6,.13,.54,.18,.12,-.13,.06,.08,.58,-.12,.02,-.19,-.16,-.03,.52,.58,0,-.02,.46,.26,-.15,-.35,.07,-.12,.01,.8,.03,-.06,.66,.04,.12,-.25,-.33,-.05,-.25,-.02,.4,.29,-.16,-.15,.03,.15,-.07,.12,-.31,-.29,.1,.14,-.07,.32,.19,.28,-.24,-.2,.76,-.18,-.18,-.12,.68,-.19,.31,-.11,-.04,-.23,.44,.16,.03,.01,.16,.14,.58,-.1,-.53,.31,.54,-.59,.47,.06,-.02,-.25,.05,-.23,-.01,.16,.15,-.33,-.12,-.21,.21,.16,-.05,0,-.04,.16,.24,-.06,.2,.18,.6,-.11,.09,.33,-.17,.71,.01,.1,-.29,.11,.68,-.48,.26,-.64,-.51,.53,.08,-.26,.1,.06,-.6,.08,.68,-.14,.09,.67,-.05,.28,.25,-.11,.47,-.09,.08,-.28,-.18,-.02,.18,.21,-.08,.07,.38,.56,.45,-.07,-.04,.04,.3,-.15,.1,.16,.07,-.16,-.51,.55,.5,-.22,-.28,.29,-.22,.23,.12,.15,.16,.43,.07,-.29,.04,.31,.2,-.04,.43,.56,.27,-.36,-.01,.01,-.39,-.05,-.03,.6,.37,0,-.17,.69,-.06,.03,.28,.38,0,-.26,-.31,.02,.07,-.25,.41,.04,.07,.59,.47,.16,.1,.1,.49,.61,.67,.35,.7,.11,.11,-.09,.35,.62,.55,.23,.64,-.11,-.33,-.03,.21,.41,-.31,.48,.18,.44,.57,.24,.43,-.22,.48,.51,-.19,.5,.09,-.03,.05,.52,.07,.5,.12,.59,.54,-.25,-.49,.83,0,-.2,-.08,.8,-.09,-.34,-.16,.01,-.45,.04,.62,-.33,.23,.15,-.04,.26,.23,.2,-.33,.24,-.3,.25,-.06,-.27,.16,-.14,.44,.14,.04,-.05,.03,-.25,-.27,.06,.33,-.03,.59,-.1,-.06,.17,.11,.64,-.07,.54,-.39,.76,-.11,.07,.67,.01,-.2,.06,.01,.19,.62,-.16,-.08,-.13,.01,-.02,.45,-.34,-.03,-.03,.36,-.08,-.49,.48,.06,.16,.12,-.09,.02,.61,.03,.52,-.6,.06,.15,.22,.11,.47,-.02,.35,0,-.02,.15,.68,-.08,.49,.15,.07,.42,.69,-.07,.28,.48,.06,.27,.02,.01,-.03,-.11,.16,.32,-.15,.52,-.04,.41,-.22,.36,.37,-.21,-.04,-.23,-.27,.62,.02,-.18,-.12,.15,.21,-.35,.57,.6,.45,.16,-.16,-.06,.03,.08,.01,-.67,.31,.04,.51,.13,.12,.09,.63,.01,.48,-.25,.03,.68,-.07,.18,.12,.11,.34,.59,.06,-.36,.15,.08,.15,.1,-.02,.61,.05,-.32,.06,.25,-.05,-.1,-.05,.09,.23,.74,.08,.46,-.54,-.09,-.01,-.1,-.06,.02,.16,.08,.63,-.6,.38,-.44,.71,.02,.01,-.01,.26,.57,.59,-.28,-.1,-.16,.04,-.38,-.25,.64,.04,.79,-.43,.72,.12,-.25,-.16,.08,-.14,.24,-.24,-.15,0,-.26,-.25,.37,.52,-.14,.09,.13,.18,.23,.54,.22,.38,.12,.17,.02,.03,.48,-.11,.46,.02,0,.03,.21,-.35,-.07,.05,.03,.49,.02,.64,0,.06,.18,.08,.01,.34,.07,.57,.67,.05,0,0,.06,.29,-.03,.12,.03,.37,-.14,.38,.63,.31,.63,-.02,-.25,-.26,.16,.02,.6,-.31,.49,.33,.49,.25,.43,-.24,.76,.16,-.09,.07,-.04,-.19,.22,0,-.06,-.1,.5,-.24,.58,.23,-.31,.49,.6,-.12,.51,.06,-.21,-.01,.01,-.16,-.41,.63,.09,-.59,-.27,-.03,-.11,-.26,-.16,.26,.27,-.03,.03,-.22,-.05,.55,.43,.53,-.27,-.22,-.41,-.07,-.27,.17,-.5,.17,-.56,-.05,.09,.33,.14,-.41,-.06,-.15,.25,.43,-.18,.27,.1,.7,.34,.66,-.01,.17,.14,.09,-.09,.01,-.09,-.27,-.05,-.14,-.12,-.06,.23,-.1,.03,-.54,-.09,.08,-.07,.37,-.03,.56,-.14,-.22,.38,-.1,0,.13,-.09,.16,.2,.08,-.28,-.32,.24,-.16,.52,-.57,-.32,-.01,-.12,-.27,-.16,-.34,-.05,.03,-.13,.16,.47,.27,-.11,-.03,-.17,-.03,.46,.49,.27,-.23,.22,-.09,.02,.57,-.63,-.26,.13,-.12,.03,.52,.12,.1,-.26,.14,-.21,-.32,-.35,-.04,.08,.09,.13,-.02,-.02,.61,.04,.42,-.09,-.24,.18,.13,.54,-.31,.46,-.24,.03,.13,-.03,.05,.14,.21,-.28,.66,.35,.44,-.05,.02,-.14,.25,.74,-.27,-.13,-.09,-.08,-.21,-.05,.66,-.03,.54,.15,.11,.47,.53,.11,-.08,.05,.03,.84,.13,.43,.01,.33,-.19,-.03,-.12,-.18,-.22,.47,.52,.63,.06,-.13,.01,.17,.12,.35,-.13,0,.14,.05,-.07,0,0,-.53,.06,.58,.3,.18,.06,.16,-.12,-.27,.2,-.01,0,-.21,.51,.01,-.07,-.12,-.59,.79,.22,.54,.2,.04,-.23,-.02,-.32,.02,-.12,-.23,.17,-.15,-.1,.51,-.06,.21,-.04,.07,-.1,0,-.16,-.38,.6,-.05,.16,-.09,-.26,0,.06,-.01,.58,-.03,-.25,-.21,-.22,-.41,-.24,-.28,-.24,0,-.04,.12,.25,.39,-.11,.51,-.49,.18,.01,-.03,-.17,-.07,.72,-.26,-.13,-.06,-.34,-.28,.51,.07,.08,-.34,.14,-.28,-.03,-.09,-.3,.05,-.18,.59,-.06,.47,-.05,-.55,.08,-.01,-.44,0,-.34,.6,.2,.02,.32,-.26,-.13,-.13,.53,-.16,.39,.22,.08,.07,-.12,.02,-.24,.06,.07,.08,.01,-.1,.57,.03,-.24,-.06,-.04,-.24,-.11,-.34,-.33,-.24,-.52,.45,-.28,-.23,-.18,-.24,-.24,-.21,.66,.13,-.33,.47,-.01,-.3,.16,-.28,.54,-.04,.11,.02,-.21,-.03,-.37,.02,-.65,1,-.23,.54,-.06,.16,.02,.11,-.61,-.04,-.36,-.27,.13,.04,-.13,.23,-.23,.24,.01,.35];export{a as rvalData};
