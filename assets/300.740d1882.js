const a=[.36,.7,0,.68,.12,.44,.56,.03,.46,.26,.16,.6,.48,.01,.94,.67,.27,.44,.13,.35,.13,0,.01,.29,.42,.08,0,.32,0,0,0,.02,.26,.61,0,.2,.44,.13,.33,.05,.35,.17,.12,.41,.93,.01,.01,.03,0,0,.09,.39,.46,0,0,.78,.37,.08,0,.5,0,.06,0,.22,.97,0,.04,.2,.65,.94,.19,.84,0,.56,.04,.76,.02,.01,.04,.01,.37,.86,.59,.12,.22,0,.09,.86,.12,.27,0,.33,0,.09,.05,.15,.06,.05,.61,0,.1,0,0,.06,0,.47,.24,.88,.03,0,.82,0,.41,.04,.2,.89,.39,0,.16,.73,.92,.02,.78,.13,.01,0,.01,.5,0,.86,0,.17,.93,0,.42,.02,0,0,0,.9,0,.87,.01,.14,.9,.51,.21,.28,0,.23,0,0,.37,.54,0,0,.78,.36,.49,.43,0,0,.47,.01,0,.02,.79,0,0,.09,.32,0,0,.07,0,0,.88,0,0,.25,.06,.94,.66,.59,0,.1,.44,.99,0,.22,.98,0,.72,0,0,.01,0,.01,.78,.01,.27,.11,.82,1,.25,0,0,0,0,.47,0,.09,.55,.62,.11,.03,.91,0,0,.02,0,0,.02,0,0,.49,0,0,.01,.9,.64,.46,.55,0,.92,.53,.16,.1,.4,.37,0,.1,.04,0,0,0,.23,.3,.66,.55,.18,0,0,.39,0,.77,.02,.12,.28,.44,.54,0,0,0,0,0,.04,.09,.27,.99,.06,0,.64,0,.25,.83,0,0,0,0,0,.01,.52,.26,0,0,.01,.62,0,.02,.29,0,.05,.08,.01,.08,.46,.26,.05,0,.15,.55,0,.63,.79,.02,.05,0,0,.68,.28,.93,.49,.88,.24,0,0,0,0,0,.04,.67,.05,0,0,0,.01,0,.29,0,0,0,.01,.4,0,.63,0,0,.98,.14,0,.36,.6,.17,.28,0,.39,0,.15,0,0,0,.92,0,.1,.35,.04,.69,0,.29,.44,.19,0,.74,.62,.19,.93,.3,.18,.81,0,.31,.83,.03,.06,.01,.27,.03,.64,0,.33,.94,.55,.12,.22,.06,.36,.34,0,0,0,.67,.92,0,.04,.23,0,.32,0,.07,.35,.02,0,.03,.01,.71,.09,0,0,0,0,.01,.35,0,.39,.52,.01,.58,0,.01,.7,.35,0,.36,.04,.24,.31,.38,0,.31,.02,.07,.7,.1,0,.08,.17,0,.12,0,0,.67,.03,.02,0,.01,.24,0,.09,0,.06,0,.08,.04,.29,.03,0,.3,.05,.03,0,0,.35,0,0,.5,.68,.35,.03,0,.93,.77,.11,.07,0,.02,0,.1,.01,0,0,.87,.15,.01,0,0,0,.11,.52,0,.96,.38,.05,.08,.01,.57,0,.31,.02,0,0,0,0,.31,.09,.81,.28,0,.23,0,.01,.26,.05,0,0,.07,.06,0,0,.17,.1,.02,.08,.53,.01,.27,.01,.6,.08,0,0,0,.39,0,.61,.23,0,.09,.04,.79,.05,0,.66,.05,0,.01,.01,.12,0,.75,.03,.51,0,0,.18,.87,0,.04,.01,.98,0,0,.01,0,.7,.3,.77,.55,.04,.4,0,0,.93,.57,.6,.04,.29,.03,0,.39,0,.63,0,0,0,.1,.18,0,0,.48,.7,.24,.17,0,0,.32,0,.02,.01,0,.04,.06,.06,.01,.28,0,0,.01,.93,.96,.18,.83,0,0,.06,.37,.14,0,.22,.7,0,.79,0,.57,0,.23,.85,.02,0,0,.5,.01,.1,0,0,0,.01,0,.02,.01,.02,.08,0,.15,.14,.01,.02,0,.06,0,.22,.01,0,.05,.02,.33,.17,.05,.52,.32,.41,.06,.54,0,.66,.52,.76,0,.06,.27,.01,.99,.42,0,0,.01,0,.1,.04,.35,.92,.2,.92,.03,.02,.26,.18,.04,.01,.16,.77,.29,.02,.98,.46,.18,.78,.43,0,.09,.08,.05,.02,.64,.06,.01,.48,.24,.74,0,.01,.13,.01,.01,.69,.11,.28,.41,.62,.12,.1,0,.41,.15,.18,.66,.04,0,.16,0,.03,0,0,.34,0,0,.93,.98,.12,.04,.17,0,.05,.01,.94,.52,.31,.65,.51,0,.43,.49,.1,.3,.27,.06,.51,.02,0,.29,.42,0,.03,0,.04,.01,0,.37,.03,.34,0,0,.09,.48,0,.01,0,.09,.7,0,0,.14,.76,.01,0,0,0,.02,.35,0,0,.01,0,.21,.04,0,.01,.03,.17,0,.33,.14,0,0,.29,0,.28,0,0,.48,.61,.5,0,0,.01,0,.19,0,.04,.51,.3,.1,0,.2,.94,.7,.11,0,.01,.85,.17,.89,0,.73,.76,.13,.9,0,.81,0,0,.47,.34,0,0,0,1,0,0,.2,.52,0,.03,.76,.66,.23,0,0,0,.02,0,.06,.52,.88,.08,0,0,.9,.61,0,.15,.93,.95,0,0,0,.12,0,.44,.85,0,0,.3,0,.58,.39,0,.01,0,0,0,.77,.04,0,.03,.74,.34,.46,.04,.28,0,.04,.76,.07,.46,.1,.37,0,.45,0,.65,.01,0,.21,0,.78,.23,.06,0,.96,.01,.12,.77,.05,0,.03,.39,.11,.25,0,0,.01,.87,.22,.24,.1,0,.2,.02,.3,.01,0,0,.82,.04,.53,.13,.21,.46,.22,.09,.44,.01,.2,0,.02,.1,.83,.12,.02,.04,.17,.06,.72,0,.83,.93,.01,.02,.55,.02,.7,.11,.01,.02,.43,0,0,0,0,.02,0,0,0,0,.01,.11,.63,.53,0,0,0,0,0,.64,0,.18,.55,.87,.07,.19,.86,.4,.97,.55,0,.1,.14,.12,.98,.01,0,0,.01,0,.83,.08,.61,.14,.36,.34,.41,.63,0,.29,0,0,.13,.9,.01,0,.44,.25,0,.35,0,.64,.08,.96,.82,0,.16,.01,.12,.63,0,.37,.36,.06,0,0,0,.13,0,.1,.53,.73,.15,0,.04,.01,.24,0,.64,0,.01,0,.01,.01,1,.02,.01,0,.08,.74,.01,.02,.01,.01,.07,.8,.05,.99,.31,0,0,.7,.84,0,.06,0,.93,.01,.02,0,0,0,0,0,.01,.62,.13,0,.48,.13,.36,.39,.38,0,.25,.43,0,0,.77,.02,.13,.08,.26,0,.12,.01,.45,.02,.41,.2,.34,.12,.32,0,.96,.01,0,.03,.86,.12,.26,0,0,.95,.39,.01,0,.1,.58,.01,.77,.12,.25,0,.98,.25,.5,0,0,.69,0,.79,0,.8,.93,.65,.04,.27,0,.02,.61,.08,.02,0,.02,0,.36,.08,0,0,.82,.82,.48,.78,.72,0,.99,.5,0,.57,.97,.14,.8,.95,0,.32,.14,.61,.15,.02,.18,.41,0,0,0,0,.02,.66,0,0,0,.08,0,.43,0,0,.06,.68,.09,.88,0,.01,.03,.24,.08,.67,.24,.01,.79,.93,0,.87,0,0,0,0,0,0,.27,.11,.01,.93,.21,.25,.79,.7,.34,0,.95,.86,.24,.07,.03,0,.98,0,.77,.41,0,.15,.06,0,.06,.1,0,.11,.19,.08,0,.08,0,0,0,0,.41,0,.43,0,.01,0,0,0,.11,.68,.72,0,.47,.01,0,.27,.01,.17,.22,.88,.57,0,.66,0,0,0,0,.13,0,.36,0,.04,.25,.21,.18,.04,.44,0,0,.39,.58,0,.39,.17,.34,.37,.48,.01,.05,.96,.77,.01,.03,.16,.29,0,.02,.38,.01,0,0,.63,0,.02,0,.99,0,0,.05,.56,0,.11,.74,0,.05,0,.2,.03,0,.49,.47,0,0,0,.02,.1,0,0,0,.01,0,0,0,.6,.02,0,0,0,0,.07,.97,.66,0,0,.19,0,.15,.26,.01,.01,.52,.02,.2,0,.49,0,0,.01,.38,0,0,.05,0,0,0,.99,0,0,.1,.15,0,0,.4,.04,0,.02,.2,.88,0,0,.17,0,0,.03,0,.54,.68,.02,0,.92,.44,.48,.12,0,.03,.31,.39,.01,.45,0,.99,.57,.13,0,0,.67,.08,.34,.83,.01,.46,0,.15,0,.24,.92,0,.28,.01,.85,0,.13,.47,.72,.7,.03,.06,0,.26,.12,.19,.26,0,.67,0,0,0,.03,.13,0,0,0,.01,.08,0,0,.35,0,0,0,.35,0,0,.35,0,0,.05,0,0,.55,0,.02,0,0,0,.88,.06,.48,.97,.17,.02,.93,.29,.05,0,.33,0,.05,0,.02,.13,.12,.79,0,0,.77,.33,.36,.29,.02,.71,0,0,0,0,.41,.89,.02,.78,.96,0,.12,.04,0,0,0,.79,0,0,0,.2,0,0,0,0,0,0,.01,0,.36,.75,0,.27,0,0,.65,0,0,.32,0,.01,.54,.53,0,.96,0,0,.04,0,.13,.59,0,0,.78,0,.79,0,0,0,0,.34,.01,.66,0,.04,0,0,0,0,0,.69,0,0,0,0,.29,0,.68,0,.09,.61,0,.04,.26,0,0,0,.56,0,0,0,0,0,.09,.91,.06,0,0,0,0,0,.84,0,.99,0,.07,0,.3,.95,.14,.01,.01,.74,.03,.79,0,.68,0,0,0,0,0,.02,.01,.17,.44,0,.01,.42,.08,0,0,.16,.3,0,.02,.73,0,0,0,0,.23,.39,.29,0,.01,.07,.14,0,0,0,.94,0,.72,.04,0,.73,0,.64,0,0,.54,.04,.27,.2,.52,0,.49,.1,0,0,.82,0,.2,.04,.42,.06,0,.49,0,0,.16,.29,.08,.06,.23,.88,.45,.5,.01,.4,0,.39,0,0,0,.11,0,.92,.12,.93,0,0,.08,.01,.05,0,.19,.07,0,.5,.33,0,0,0,.2,0,0,0,0,0,.33,.51,.55,.89,0,.55,.01,.98,.05,.04,.23,0,.35,0,0,.5,.95,.03,.9,.22,.07,0,.84,.24,.55,.75,.29,.11,0,0,.1,.59,.07,0,0,0,0,0,.55,.01,.1,.05,.46,.33,.02,.4,.03,0,.08,.2,.01,.11,.1,0,0,.13,.05,0,.14,0,0,0,.87,.05,.15,.01,0,.25,.02,.27,0,0,.07,.3,0,.31,0,.01,.24,0,0,.04,0,.01,.26,0,0,0,.06,0,.01,.44,.65,.5,.57,.94,.98,.95,.23,.02,.01,0,.41,.1,.3,0,.47,.06,.33,.09,.31,.81,0,.02,0,.01,.01,.28,.51,.18,.3,.01,.12,0,0,0,0,0,.04,.34,.01,1,.53,0,0,0,.47,.06,.69,.64,.99,.34,.11,.01,0,0,.02,.33,.85,0,.17,0,.03,.71,.64,.27,.01,.18,.21,.1,.19,.67,0,0,.01,.08,0,0,0,0,0,.54,.09,.67,0,.08,.07,.11,.11,.4,.58,0,.39,0,.98,.25,.46,0,.05,.48,0,.95,.09,.02,.04,.62,.37,.76,0,.31,.39,.11,.01,0,.01,.01,.47,0,.01,.04,.01,0,.1,0,0,.78,.41,.83,.03,.17,.01,.84,.34,0,.57,.43,0,.58,0,.01,.6,.45,.75,.01,.19,.04,.01,.01,.22,0,.01,0,0,.46,.16,0,.86,0,.84,.17,0,.16,.88,0,0,.13,0,.07,0,.2,.27,0,.11,.57,0,.37,0,.41,0,.32,.01,.09,0,.44,.15,.63,0,.57,.04,0,.06,.43,.37,.24,.91,.08,.01,0,.17,0,.04,.86,.73,.11,.06,.7,0,0,.05,0,.07,.65,0,0,.01,0,.01,.01,.01,.39,0,.66,.08,0,.84,.02,.48,.31,.33,.81,.8,0];export{a as pvalData};
