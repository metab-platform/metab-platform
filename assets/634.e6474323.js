const a=[.03,.01,.14,.09,.13,.26,.15,.47,.17,.13,-.08,.01,-.13,-.22,-.19,.09,.04,-.07,-.1,.16,-.28,-.73,.17,-.34,0,.19,-.76,.17,.09,-.8,.41,-.62,.18,.28,-.18,.19,-.04,-.24,.18,.14,-.12,.21,.16,.02,.11,-.29,-.11,-.24,-.69,.6,.03,0,-.14,.11,.67,-.07,-.02,.44,.06,.18,.79,.28,.39,.06,-.35,-.72,.3,-.33,-.22,-.09,.01,-.11,.77,-.3,.13,0,-.28,.83,-.01,-.47,-.22,.14,-.01,.21,-.14,-.61,.17,.05,-.21,.04,.57,.11,.46,-.02,-.07,.21,-.24,-.27,.02,.8,-.01,.36,.54,.12,.65,.02,-.3,-.38,.12,.56,.06,.62,.18,-.11,-.21,-.03,0,-.71,-.29,.17,-.01,-.37,.07,.01,.04,.54,.15,-.05,-.44,-.01,.56,.08,.05,.63,-.21,-.14,.68,.32,-.71,.06,.38,.14,.43,.18,.15,.09,.02,.18,.49,-.05,.37,.44,.02,.06,.52,.55,-.25,-.08,-.15,-.21,.54,.53,.02,.61,.48,.84,.22,-.68,.4,.2,.12,-.55,.52,.3,.25,-.71,.11,-.78,.78,.14,-.1,.05,.18,-.08,.66,.19,-.05,.1,.55,-.05,.06,.69,-.08,.58,.62,.14,.56,.26,-.13,-.48,0,.46,.04,-.08,-.19,.51,-.05,.67,.74,.03,.53,-.22,-.01,-.06,.42,.44,.09,.49,-.7,-.57,.39,.55,.49,.14,.29,.05,.64,-.64,.48,.38,.12,.05,-.14,.15,-.12,.14,-.24,-.32,.36,-.08,.71,-.29,.44,.62,.45,.33,.06,.21,-.1,-.01,.57,-.38,.68,.28,.33,-.1,.01,.42,.27,-.03,-.07,.39,.51,.36,.28,.63,-.35,.26,-.01,.21,-.34,.05,.05,.19,.1,.08,-.72,.82,.3,-.68,.78,-.66,-.02,-.06,.53,.19,-.61,-.06,.53,-.54,.28,.72,.17,.31,.4,.2,-.11,-.15,.26,.4,.03,.03,-.52,-.03,.18,.09,-.18,.66,.53,-.21,.27,.09,-.14,.12,.06,.41,.43,.52,.21,.36,.28,-.01,-.27,.27,.41,.56,.14,-.03,-.04,.54,-.23,.32,.15,0,-.71,-.13,-.64,.43,-.07,-.42,.64,.16,-.02,-.14,-.06,.23,.07,.79,.15,.51,.53,.56,.19,.55,-.19,-.04,.45,-.28,.4,.06,.12,.09,.47,-.38,-.04,-.01,.16,.03,.62,.07,-.62,-.04,.14,.32,.74,.48,-.03,.24,-.09,.59,-.05,0,-.1,.03,.11,.28,-.18,-.07,.24,.19,.36,0,.09,.08,.01,.04,-.67,.06,.05,.04,-.2,.33,.32,.21,.67,-.05,-.23,.36,.46,.27,.19,-.23,.25,.38,.37,-.08,.38,-.11,.79,-.19,.19,-.04,-.5,.01,.03,.01,.02,.07,.47,.35,.42,.33,.15,.14,.61,.07,-.02,.17,.11,.56,.54,.3,.4,-.12,.44,.49,.01,.2,.07,-.52,.32,.63,-.26,.27,-.04,.17,-.73,.06,.45,.35,.24,.27,-.2,.85,.01,.15,0,-.11,-.28,.08,-.36,0,.12,-.13,.66,.13,.25,.35,.14,-.72,.49,-.1,.24,.42,.53,.3,.43,.19,-.1,.16,.01,-.01,-.09,.1,.23,.05,.43,-.16,.25,.54,.54,.13,.41,.09,.32,.15,.16,.24,-.04,.77,.52,.27,.33,.26,.43,-.46,.5,.53,.87,.18,-.26,.14,.12,.15,.39,.05,-.12,.19,.02,.28,.72,.43,.07,.46,.11,.35,.5,-.08,.3,-.04,-.25,.54,-.13,-.74,-.32,0,.26,-.73,.32,.13,-.62,.05,.16,.12,.38,-.1,-.34,.28,-.21,-.1,.15,-.6,.22,.47,-.07,.06,.17,-.12,.6,-.22,.29,.14,.13,.18,.2,.04,-.11,-.38,.7,.02,-.37,0,.52,.38,.68,-.24,.05,.47,-.5,-.07,-.04,-.01,-.1,.45,.45,-.12,.26,.09,.46,.25,.23,.14,.15,.55,.02,-.73,.63,-.32,-.03,.08,-.01,-.11,.16,.68,.07,0,.07,.35,-.25,.03,.35,.08,.43,.15,.47,-.17,.16,.44,.47,.24,-.13,-.5,-.24,1,.11,.56,.12,.62,.36,-.61,.35,.26,-.61,.12,-.01,.36,.31,.23,-.12,.69,-.14,-.31,.39,.11,.13,.25,-.25,-.23,-.02,.03,.04,.21,.12,.5,.04,.13,-.07,.4,.28,.22,.19,-.03,-.07,-.81,.56,.51,.54,.13,-.07,.12,.03,.26,.08,.18,.5,.17,-.27,.25,.21,.34,.01,.01,.29,-.07,.19,.02,.12,.23,.3,-.13,.23,.44,.44,.17,.17,-.09,-.05,-.07,.05,-.78,.34,.5,.31,.37,.22,.04,.01,.21,-.18,0,.42,.34,-.06,-.09,.12,-.15,-.12,-.54,-.14,.25,-.27,.42,.19,-.18,.52,.7,-.08,.03,.06,.12,-.19,.12,-.53,-.78,-.06,-.05,.21,-.12,.29,.67,-.07,-.42,-.22,.18,.07,.15,-.19,-.46,.18,-.2,.1,-.72,.09,.31,-.41,-.07,.29,.03,-.39,.17,.41,.52,.17,.13,.66,-.14,.44,.4,.1,.6,.18,-.25,-.04,.31,.2,.54,.65,.82,-.01,-.45,-.66,.32,.48,-.33,.13,-.62,.09,.42,.09,.62,.02,.09,-.38,.41,0,.24,.33,-.2,.46,-.12,.05,.11,.22,-.51,.33,.53,-.22,-.65,.01,.06,-.1,.08,.46,.05,-.05,.05,-.22,.34,-.11,-.01,.18,.04,.43,.02,.02,-.4,-.13,.45,.17,-.69,.44,.12,-.03,.58,-.39,.35,-.35,-.64,.58,-.09,0,-.69,.33,-.16,-.08,.28,.49,.49,.52,-.4,.56,.1,-.18,-.15,.33,.42,-.39,.14,.3,.42,.18,.11,.01,.64,.53,.5,.02,.34,-.12,.25,-.76,.19,-.03,.34,-.1,.15,.71,.04,.35,.28,.3,-.02,-.23,.71,.23,.05,-.13,-.07,.25,.13,.24,-.17,-.08,-.04,.06,.08,-.09,.7,-.02,.64,.2,-.78,-.41,.25,.49,.35,.14,.51,.47,-.11,.53,-.23,-.02,.11,.34,.13,.23,.05,.23,.49,.69,.06,-.11,.24,.24,-.24,.83,-.07,.42,.23,-.18,-.02,.34,.26,.25,.21,.39,.18,-.13,-.24,.41,.09,.26,-.2,.47,-.02,.29,.09,.25,.2,.1,-.15,.21,.06,.43,.05,.07,.2,-.21,-.09,-.5,.2,-.36,-.28,.19,-.01,.22,.46,.76,.32,.2,.46,-.68,.45,.43,.41,.48,0,.04,.58,.59,.42,.71,.37,-.03,.65,-.07,.02,.12,.01,.03,.12,.06,.21,.08,-.36,-.13,.19,-.05,.01,-.24,.58,.49,-.64,.35,.07,.38,.14,.34,-.02,.31,.14,.19,.64,-.14,.41,.35,-.08,.08,-.04,.58,-.05,.05,.5,.04,.58,-.03,.48,-.07,-.13,.34,.03,-.61,.05,.03,.65,-.06,-.06,-.23,.22,.61,.25,.17,.43,.03,-.16,-.21,.09,.53,.1,-.69,-.07,.08,-.09,.76,.35,-.65,.19,.05,.11,.56,.58,.55,.05,-.11,.21,0,.41,.39,.15,.13,-.54,.03,.05,.79,-.48,.14,-.13,-.71,.27,-.17,.26,.27,-.49,.14,.48,.46,.27,.25,.16,.3,-.42,.56,.16,.14,.17,.04,-.02,.26,-.1,-.21,.72,.86,-.06,-.46,-.45,-.03,-.08,.6,.08,-.13,-.27,-.24,-.01,-.26,.03,-.04,-.26,.53,-.17,.48,.22,.08,-.12,.09,.13,.2,.42,.18,.25,.09,-.23,-.12,.31,.38,.15,-.02,-.2,.23,-.15,.13,-.09,.68,.21,-.1,.57,.11,.47,.26,.07,.11,.37,-.04,.66,.1,.16,.18,.11,.4,.48,.51,-.01,-.25,.5,.58,-.11,-.15,.06,.22,-.09,.58,-.1,-.03,.36,-.24,.16,.01,-.11,-.26,.12,.05,.36,.12,-.11,.22,-.06,-.1,.39,.47,-.2,-.35,.47,.08,.31,.42,.55,.24,.12,.18,.63,.21,-.12,-.14,.32,.06,.53,-.16,.24,.18,.45,.2,.29,.32,.15,.19,.5,.04,-.76,.46,.47,-.77,.2,.37,-.07,.12,.34,.21,.07,.01,.14,-.08,.18,.19,-.07,.15,.08,-.12,.04,.23,.13,.3,.04,.1,.51,.07,.02,.46,-.34,.42,.43,-.3,.06,.1,.38,-.54,.51,-.74,-.72,.61,-.02,.08,-.13,.42,-.33,.22,.35,.01,-.12,.38,-.01,.56,.22,.11,.53,-.07,.11,.08,-.13,-.06,.09,.16,.22,.42,.62,.29,.62,-.15,.38,.15,.65,.09,.46,.08,.03,-.01,-.31,.81,.47,.07,-.36,.55,.06,-.07,.38,.18,.17,.56,.32,-.04,.15,.36,.24,-.12,.14,.49,.38,.05,.35,.35,-.7,-.3,.28,.41,.24,.07,-.03,.47,-.16,.04,.49,.35,-.01,-.18,-.31,.15,.16,-.17,.68,-.13,-.05,.8,.57,.49,.31,.23,.54,.62,.7,.44,.63,.4,.38,-.04,.14,.1,.31,.49,.61,-.03,-.27,-.28,.19,.46,.04,.42,-.05,.1,.16,.22,.09,-.21,.2,.22,-.24,.38,.24,-.09,-.05,.73,.44,.38,.43,.46,.74,-.02,-.18,.63,-.03,.08,-.16,.68,-.08,-.32,.16,.3,-.3,.09,.81,-.52,.16,.43,.25,.33,.29,.23,-.13,.35,-.28,.33,.01,-.22,.09,-.07,.55,-.17,-.05,-.02,-.14,-.15,-.03,-.16,.34,.38,.59,.27,.19,.11,-.02,.75,.06,.6,-.32,.34,.26,.13,.48,-.04,-.05,-.05,.18,-.1,.08,-.01,.17,.2,.25,.16,.54,-.35,.06,.05,.4,.03,-.45,.66,.44,.25,.06,.1,.28,.79,-.16,.09,-.69,.48,-.07,.59,.4,.68,.03,.41,.28,.11,.31,.41,.24,.66,-.02,.07,.66,.35,.38,.44,.42,.23,.3,-.01,-.02,.11,.29,-.12,.26,.21,.69,-.29,.59,.06,.4,.33,-.06,.19,-.09,-.25,.7,.12,-.05,.28,.14,.44,-.17,.54,.6,.45,.41,-.14,.13,.3,.07,-.02,-.64,.35,.4,.63,.13,.54,-.08,.53,.2,.68,.1,.27,.74,.31,.58,.4,.09,.32,.56,.27,-.16,.27,0,.47,.45,.06,.55,.32,-.14,.32,.31,.08,-.28,.38,.37,.41,.59,.24,.5,-.33,-.05,.29,.24,.16,.32,.17,.22,.67,-.6,.7,-.26,.39,.08,.41,.33,.55,.57,.6,-.18,.23,.11,.36,-.42,-.49,.66,.18,.5,-.12,.7,.12,.01,-.34,.29,.1,.56,.08,.19,-.04,-.36,.05,.44,.53,.18,.06,.02,.34,.33,.76,.47,.55,.47,.04,.37,-.1,.7,-.06,.47,-.11,.02,-.01,.21,.06,.16,.32,.16,.68,-.05,.57,.46,.27,.43,.3,.25,.36,.03,.4,.64,.25,.04,-.09,.31,.56,.32,.17,.25,.35,-.13,.57,.69,.52,.54,.08,.05,.04,.43,.27,.43,0,.62,.66,.6,.03,.64,-.09,.27,.46,-.16,.47,-.11,.16,.55,-.11,.29,-.13,.44,-.13,.66,.12,-.11,.53,.45,-.13,.49,.32,-.21,.06,.31,.17,-.28,.56,.35,-.28,-.09,.22,.21,.03,-.23,.2,.16,.25,-.12,-.22,.01,.56,.47,.48,.07,.16,-.16,-.14,.05,.53,-.51,.3,-.48,.34,.28,.35,-.08,-.22,-.05,-.19,.4,.37,.16,.49,.36,.45,.49,.65,.22,.14,.21,.1,.03,.4,-.14,.07,.16,.12,.19,-.01,.57,.2,.38,-.77,-.02,-.02,0,-.04,.08,.34,-.31,-.26,.31,-.09,.11,.02,0,.55,.54,.09,.04,-.01,.05,.18,.25,-.79,-.57,-.12,.28,.04,.17,.09,-.33,.32,.24,.47,.66,.29,.21,.35,.12,.27,.72,.69,.38,-.28,.55,.22,.36,.51,-.71,-.35,.2,.2,.17,.73,.01,.35,0,.46,.16,0,-.04,.39,-.05,.48,.05,-.28,.33,.54,.11,.48,.19,.04,.52,.33,.55,.12,.52,.16,.14,.2,.05,.21,.14,.2,-.03,.37,.37,.2,.18,-.03,-.03,-.02,.53,-.33,-.16,-.26,-.05,.01,.08,.56,.19,.59,.14,.31,.18,.33,-.07,-.08,.27,.03,.65,.54,.65,.15,.16,.16,.09,.2,-.23,.06,.44,.7,.75,-.07,-.08,.09,.32,.15,.11,-.13,-.01,.49,.42,.35,.3,-.09,-.47,.38,.69,.25,.19,-.12,0,.22,.04,.21,.25,.26,0,.42,.09,.27,.23,-.75,.5,.55,.76,.43,0,-.36,.19,-.25,.08,-.15,.08,.04,-.07,.24,.68,.04,.55,.19,0,.03,.36,-.33,-.14,.53,-.13,.09,-.01,-.04,.12,.06,-.01,.59,.28,0,.12,.2,-.42,.1,-.04,.06,.23,.16,.16,.31,.54,.21,.49,-.24,.17,.04,.04,.18,.26,.26,.02,-.26,.11,-.01,-.31,.41,.14,.06,-.5,-.14,-.34,0,.27,.1,.26,.14,.76,-.13,.6,.14,-.5,.11,-.2,-.15,.25,-.07,.39,-.08,-.31,.49,-.13,-.15,.3,.49,.16,.48,.18,.31,-.25,.19,.35,.1,-.08,.46,.26,.38,.15,.43,.17,.12,.19,.32,.05,.2,-.11,-.36,.05,-.36,.59,-.21,.02,.17,.14,.06,.19,.35,.51,-.18,.19,-.15,.03,.17,0,.16,-.03,.51,.23,.17,.37,-.3,.07,-.64,.63,.19,.49,.2,.28,.3,.08,-.81,.11,-.39,-.31,.06,.22,-.11,.19,.08,.2,0,.63];export{a as rvalData};
