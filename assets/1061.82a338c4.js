const a=[.29,.12,.14,.32,.17,0,.26,0,.64,.01,.21,.49,.33,.06,.04,.55,.11,.98,.15,.28,.19,0,.19,0,.34,.65,0,.01,.31,0,.19,0,.49,0,.07,.72,.22,0,.52,.3,.01,.55,0,.92,.8,0,.04,.29,0,0,.91,.58,.18,.9,0,.08,.21,0,.78,.81,0,.7,.02,.16,0,0,.11,0,.13,.7,.87,.1,0,.69,.65,.8,.02,0,.7,.12,.12,.75,.91,.71,.11,0,.7,.88,.33,.36,0,.44,0,.65,.78,.71,.16,.46,.48,0,.99,.04,.01,.83,0,.42,0,0,.93,.02,.57,0,.9,.62,.07,.2,.13,0,.06,.84,.24,.06,.02,.46,.38,0,.92,.08,.02,.24,0,.61,.78,0,.52,.7,0,.38,0,.04,.02,.02,0,.45,.02,.23,.8,.01,0,.36,.01,0,.79,.64,0,0,.02,.94,.64,.01,0,0,.95,0,0,0,.88,0,0,.63,.05,.05,0,.01,.11,0,.43,0,0,.94,.42,.85,.07,.09,0,.42,.74,.23,0,.83,.81,0,.11,0,0,.85,0,0,.94,0,.29,.01,.48,.68,.2,0,.73,0,0,.3,0,0,.97,.04,0,.01,.72,0,0,0,.02,.01,0,.62,.18,.45,0,0,0,0,.87,.36,0,.23,.42,.01,.01,0,.06,.56,0,0,0,0,0,.01,.65,.11,.75,.76,0,0,0,.34,.02,.01,.55,0,.35,.74,.03,0,0,.02,0,0,.07,.24,.74,.7,0,.23,.65,.15,.56,.4,0,0,.05,0,0,0,.99,.56,.01,.8,0,.16,0,0,0,0,.61,.02,0,0,.07,.46,.01,.01,.46,.76,0,.83,.6,.56,0,0,0,0,.07,.56,.17,.05,.39,.01,0,0,.05,.18,.33,.17,.03,.33,.01,0,.79,.89,.4,0,.35,.17,.22,.65,0,.2,0,.05,.83,0,0,0,.4,.25,.07,.33,.1,0,.01,.15,0,0,.28,0,.01,.73,.06,.25,0,.72,.47,.29,0,0,.42,.97,.1,.5,0,.87,0,.82,.72,0,0,0,.94,.05,.15,0,.15,.88,.09,.83,.32,.53,.99,.73,.71,.67,.02,.25,.72,.22,.8,.68,0,.91,.32,.54,.02,.05,.01,.89,0,.79,.09,.02,.01,.33,.14,.04,.45,.01,0,.45,.01,.79,0,.14,.03,.13,0,.48,.16,.37,.35,.41,0,.04,0,0,.8,.12,0,.92,.2,.46,.42,0,0,.13,.04,.58,0,0,.62,.63,.67,0,.02,0,.26,.39,.26,.01,0,.46,0,.09,.03,.16,.71,0,.63,.87,.73,.86,.19,.9,0,.38,.11,.78,0,.68,.03,0,.95,0,0,.04,.08,0,0,.13,0,.04,.47,.1,.97,.57,.33,.26,.01,.59,0,.1,.12,0,0,.13,.05,.66,.24,.21,0,.45,.17,0,0,.14,.11,.65,.01,0,0,0,0,.09,.34,.11,.2,.97,.01,.13,.01,.19,.72,.14,0,0,.68,.04,.02,0,0,.39,0,.17,.19,0,.27,0,.32,.89,.04,0,.28,.3,0,.37,.3,.94,.06,.52,.04,.1,.3,.35,.82,0,.65,0,.35,.76,.54,.68,0,.23,.04,.14,.08,.68,.2,.73,.92,0,0,.92,.2,.65,0,.01,0,.01,.81,.01,0,.12,.91,.22,.5,.02,0,.71,.07,.31,0,.13,.2,.5,.04,0,.32,0,0,.09,.95,.47,.89,.05,.29,0,.66,.64,.67,0,.08,.27,0,.57,0,.45,0,.44,.07,0,0,.14,.37,0,.06,0,.77,.01,.81,0,0,0,0,.31,0,.02,.15,.02,0,.47,.01,0,.89,.13,0,.44,.67,.18,0,.42,.32,.61,.7,0,.69,0,.45,.59,.98,.04,.16,.15,.92,.73,.28,0,0,0,.01,.57,.7,.96,.7,0,.56,.62,0,.05,.07,.8,.36,0,.39,.92,0,.13,.01,.84,.04,.02,.07,.65,.54,0,0,.41,.6,.95,.51,.09,.72,0,.05,.05,.01,0,.4,.09,.32,.42,.19,.95,0,.03,.21,.89,.47,.66,.48,0,.98,.01,.13,.09,.83,.1,0,0,.09,.48,.07,.76,0,.27,0,0,.16,.98,.94,.01,.13,0,.68,0,.03,.1,.54,.11,0,0,.4,.66,.01,0,.65,0,0,.92,.09,.83,0,.03,0,0,.32,0,0,.45,0,0,.94,0,.59,0,.56,.16,.11,0,0,0,.68,0,0,.09,0,0,.75,0,.65,.03,.46,0,.5,.56,0,0,.7,.59,0,.47,0,.5,.99,.61,.72,.01,.36,0,.15,0,.41,.97,.24,.77,0,.22,.76,.51,.17,0,.13,.12,.04,.46,0,.51,.47,0,.71,0,.01,0,0,.88,.14,0,0,.01,0,0,0,.17,.98,0,.27,.21,.1,.28,0,0,0,0,0,.83,0,.26,0,0,.05,.04,.09,.01,.78,.7,.61,0,0,0,.46,.01,.03,0,0,.16,.11,.28,.05,.13,0,.43,.01,.01,.53,.75,.58,0,.33,.84,.15,.91,.04,.43,.14,0,.56,.82,.1,.8,.84,0,.7,0,0,0,0,.02,0,.05,.06,0,0,.59,0,.32,.35,.77,.01,.09,.01,.92,.16,0,0,.73,.16,.27,.19,.12,0,.24,.01,.12,.83,.1,0,.42,.59,.01,0,.81,.31,.09,0,.72,.51,.01,0,.57,.12,0,.14,.05,.77,.54,.03,.44,0,.68,.9,.06,.25,.96,0,0,0,.01,.37,.91,.12,0,0,.09,.14,0,0,0,0,0,0,.31,.35,0,0,0,0,.01,.87,0,.63,.71,.04,.82,.25,.53,.47,.24,.7,.04,.99,.2,.93,.41,0,0,0,0,0,.17,0,.24,0,.94,.03,.04,.25,0,.56,0,.21,.45,.44,.43,0,.38,.37,.03,.11,0,.2,0,.07,.61,.84,.89,0,.68,.71,0,.98,.6,.5,.2,0,.05,.45,0,.61,.7,.27,.81,0,.82,0,.63,.34,.09,0,0,0,.74,.74,.65,0,0,0,.33,.07,.51,.46,.12,0,.74,.13,0,.43,.55,0,0,.71,.12,0,.22,.36,.14,.02,0,.26,0,0,.31,.21,.34,0,0,0,.99,.87,.88,.35,.5,.05,.21,.02,0,0,.5,0,0,.93,.07,0,.82,.91,0,.39,.49,0,.88,.53,0,0,.02,0,.25,.8,.05,.94,.12,.49,0,0,0,.95,.14,.71,.01,0,.01,.39,0,.02,.01,.93,.25,0,.01,.22,0,.05,0,0,.06,.39,.01,.88,0,.73,.9,.16,.98,0,.07,0,.29,.6,.01,0,.33,.02,.22,.48,.07,0,.57,.38,0,.06,.09,.61,.05,.02,.91,.67,0,.03,.03,.17,.88,.94,0,0,.99,.27,0,.03,.1,.01,0,.03,.15,.3,0,.15,.44,.07,.14,.38,0,.68,.47,.04,0,0,.13,.2,.01,.01,0,.82,0,0,0,0,.01,.07,.84,.07,0,.12,.99,.18,.01,.07,.76,.45,.71,.02,.45,.61,.66,.32,.07,.11,.28,.26,0,.79,.95,0,0,0,0,.19,.5,.42,.19,0,0,0,0,0,.47,.67,.35,.02,.02,.01,0,.83,.4,.4,.35,0,.01,.73,0,.3,.17,.67,.24,.25,.19,.02,.39,.1,0,0,0,.01,0,.37,0,.74,0,.64,.73,.28,0,0,0,.6,.01,0,.72,.83,0,.84,.02,0,.39,.16,.01,0,.09,.5,.04,0,.01,.98,.24,.03,0,.02,.3,0,.2,.46,.8,0,.27,.59,.02,0,.53,.26,0,.07,.52,.06,0,.99,.43,0,0,0,.2,.41,0,.01,0,0,0,0,.01,.4,.23,.28,.04,0,0,.43,.23,.12,.03,.01,.06,.05,.79,.63,.55,.23,.29,.14,.1,.06,.22,0,0,.01,.34,0,0,0,.01,0,0,.22,.1,0,.82,.43,.37,0,.94,.04,.58,.13,0,.76,0,0,.1,.17,.72,.1,0,.12,.04,0,.15,0,.46,.15,.28,.98,0,.35,.29,.34,.01,.08,.08,.83,0,.06,0,.43,.43,.31,.8,0,.51,0,0,.16,.1,.22,0,.81,.27,.16,.54,.92,.38,.82,.81,.64,.83,.42,0,0,.19,.96,0,.44,0,0,0,.4,.68,.79,.14,0,.13,.46,0,0,.52,0,.03,0,.64,0,.25,.44,.34,.01,.22,0,.53,.62,0,.01,0,0,.27,.06,.01,.97,.65,.11,0,.33,0,.17,0,.33,0,.79,.01,0,.87,.42,.24,.21,0,.56,.35,.36,.42,.04,.01,0,0,.01,.02,0,.96,.46,.24,.91,0,0,.03,0,.38,0,.33,0,.92,0,.49,.84,0,.03,0,.17,.15,0,0,.33,.44,.74,.32,.03,.02,.05,0,.2,.14,.28,.71,.32,.35,.04,.26,0,0,.94,.01,0,.76,.54,.09,.75,.17,.01,.06,0,0,0,0,.13,.47,.01,.04,0,0,0,.34,.4,.78,.16,0,0,0,.79,.01,.64,0,.49,.31,0,.27,.11,0,.76,.44,.76,.17,.8,0,0,.47,.84,.13,.05,.05,0,.01,0,.05,.19,.1,.68,0,.19,0,.82,.46,.83,.39,.38,.42,.05,.13,0,.98,0,0,.28,.08,.22,.55,0,.77,0,0,.46,.29,.43,.21,0,.13,0,.26,0,.18,0,0,0,0,.59,.78,.74,.19,.89,.11,.92,0,0,.02,.51,0,.05,.43,.05,.22,0,.2,.21,0,.32,.39,.1,0,0,0,.94,.05,0,0,.42,0,0,.15,.58,.55,.73,0,0,.14,.03,0,.3,.49,.82,.44,.01,.01,.52,.82,.31,.37,0,.02,.02,.76,.05,.78,.13,.83,0,0,.24,0,.01,.01,0,.89,0,.32,.42,0,.07,.21,0,.01,.14,0,0,.61,.02,.38,.83,.73,.01,.99,.84,.63,.73,.6,.59,0,.74,.1,0,.64,.21,.12,.59,.8,0,.22,.03,0,.36,.94,.74,.66,0,0,.68,.89,.9,.7,.19,.15,0,0,.05,.1,.97,.35,.38,0,.06,0,.01,0,.14,0,.03,.78,.11,0,0,0,.19,0,.99,0,0,0,0,.01,.6,.34,0,0,.01,.45,0,.27,.88,.23,0,.19,0,.62,.23,.03,0,.85,0,.47,.43,0,0,0,0,0,.19,.38,.14,.88,.22,.02,.02,.37,0,0,.02,.36,.41,.29,.72,0,0,.45,.18,.69,.41,.42,0,.47,0,.13,.18,.08,0,.77,.48,.18,.73,0,0,0,.93,.09,.62,.06,.34,.33,.5,0,0,0,.28,.41,.83,.08,.49,.13,.47,.52,0,.02,0,.05,.49,.01,.07,0,.01,.01,.2,.94,.42,.61,.92,.39,.61,.49,0,.03,.01,.71,0,0,0,0,0,.86,.03,0,.02,.67,.64,.96,.86,.2,.12,0,.61,0,0,.62,.6,.03,.08,.01,0,.21,.03,.4,.22,.02,.07,.21,0,0,.3,.34,.14,.02,.93,.23,.8,.34,.88,.31,.02,0,.69,0,.04,.43,.2,.02,.43,.17,.46,.77,.01,.77,.85,0,.01,.02,.01,0,.93,0,.8,.09,.19,.47,.47,0,.75,0,.85,0,.19,0,.21,.37,.16,.04,.09,.28,0,.01,.73,0,0,.58,0,.96,.2,.38,.38,0,.62,1,0,0,.01,.4,0,.65,.28,.46,0,.49,.67,.08,.19,.49,0,0,.03,.58,.82,.25,.6,.34,.55,0,.01,.77,.11,.49,.01,.61,.37,.75,0,.65,.56,.02,.14,.7,0,0,.02,.47,.14,.3,.02,.02,0,.1,0,.1,.08,.85,0,.6,.85,0,.09,0];export{a as pvalData};
