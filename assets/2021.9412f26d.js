const a=[.57,.32,.47,.38,.33,.64,.04,.05,.31,.13,.82,.68,.42,.38,.75,.31,.69,.4,.85,.22,.88,.45,.33,.53,.31,.17,.13,.42,.65,.08,.09,.37,.43,.63,.29,.8,.85,.82,.21,1,.99,.24,.28,.19,.88,.33,.42,.79,.13,.04,.11,.3,.4,.58,.01,.97,.07,.83,.71,.68,.07,.26,.19,.19,.85,.37,.15,.95,.42,.19,.17,.64,0,.34,.58,.67,.09,.03,.7,.99,.36,.36,.16,.52,.06,.29,.1,.19,.81,.31,.01,.73,.01,.4,.33,.07,.14,.01,.3,.02,.9,.12,.01,.82,.01,.64,0,.09,.21,.21,.07,.01,.1,.1,.04,.76,.62,.13,.59,.2,.04,.91,.12,.62,.42,.01,.37,.5,.08,.96,.01,.01,.14,.04,.22,.37,.73,.73,.36,.53,.13,.61,.12,.09,.58,.67,.67,.29,.01,.44,.14,.03,.84,.04,0,0,.5,.84,.31,.97,.01,.03,.52,.13,0,.03,.35,.38,.31,.74,.51,.57,.01,.04,.09,.27,.99,.04,.16,.95,.52,.39,.39,.64,.02,.11,.21,.43,.05,.44,.45,.01,.95,.03,.05,.3,.11,.02,.52,.62,.56,.03,.69,.43,.72,.03,.4,.01,.03,.34,.01,.53,.52,.92,.96,.42,.3,.01,.11,.1,.13,.02,.9,.49,.01,.86,0,.39,0,.15,.11,.28,.48,.62,.15,.61,.39,.36,.1,.52,.13,.67,.03,.08,.02,.04,.15,.4,.43,.05,.02,.73,.01,.07,.08,.33,.75,.23,.32,.85,.5,.01,.01,.16,.55,.01,.7,.04,1,.76,.99,.5,.68,.27,.42,.99,.35,.07,.2,.16,.01,.05,.67,.1,.01,.21,.09,.73,.06,.96,.04,.05,.14,.02,.02,.18,.96,.6,.88,.06,.47,.51,.92,.08,.52,.3,.42,.19,.03,.74,.44,.8,.39,.43,.03,.06,.07,0,.39,.77,.39,.12,.76,.27,.02,.01,.16,.35,.13,.01,.03,.44,.66,.03,.25,0,.31,.81,.22,.62,.01,.19,.1,.04,.91,.42,.27,.01,.15,.04,.04,.22,.72,0,.25,.61,.29,.63,.21,.92,.89,.72,.02,.25,.16,.11,.63,.41,.08,.03,.73,.69,.33,.63,.21,0,.04,.07,.38,.02,.7,.72,.47,.78,.8,.97,.69,.66,.21,.3,.14,.29,.3,.49,.7,.36,.27,.21,.31,.15,.13,0,.14,.49,.17,.18,.42,.14,.1,.1,.37,.23,.62,.1,0,.1,.03,.26,.01,.58,.86,.33,.16,.58,.95,.61,.53,.22,.09,.08,.01,.29,.2,.51,.01,.99,.02,.11,.34,.07,.01,.29,.21,.85,.52,0,.87,.06,.64,.12,.03,.74,.15,.03,.02,.2,.05,.83,.22,.68,.5,.1,.17,.07,.38,.05,.35,.01,.89,.79,.07,.83,.91,.4,0,.13,.13,.06,.45,.15,.25,.98,.28,0,.52,.94,0,.78,.57,.32,.43,.99,.07,.34,.31,.64,.07,.01,.29,.03,.01,.39,.09,.89,.46,.17,.24,.07,.41,.05,.04,.07,.14,.83,.66,.09,.05,.01,.03,.16,.64,.18,.05,.24,.66,.6,.94,.69,.13,.04,0,.03,.64,.28,.71,.56,0,.01,.08,.9,.04,0,.24,.17,.78,.7,.41,.24,.29,.78,.02,.74,.34,.74,.63,.41,.08,.14,.73,.8,.84,.6,.05,.1,.98,0,.09,.02,.02,.86,.15,.64,.33,.63,.19,.58,.27,.48,.05,0,.61,.43,.06,.47,.01,.81,.32,.94,.35,.97,.64,.9,.85,.27,.01,.09,.08,.62,.17,.08,.11,.51,.18,.02,.3,.24,0,.92,.9,.77,.02,.68,.11,0,0,.41,.34,.01,.42,.74,.01,.25,.01,.36,.01,.91,.34,.01,.02,.11,.13,.24,.43,.05,.02,.15,.13,.09,.52,.65,.59,.55,.16,.64,0,.04,.15,.28,.37,0,.36,.09,.01,.56,.14,.02,.98,.49,.78,.94,.41,.08,.59,.01,.62,.38,.06,.08,.2,.65,.49,.72,0,.04,.01,.03,.17,.5,.58,.41,0,.13,.31,.71,.2,.44,.34,.32,.07,.06,.79,.82,.08,.67,.8,.13,.64,.62,.2,.71,.36,0,.01,.45,.05,.78,.73,.68,.32,.19,.09,.35,.36,0,.02,.08,.2,.13,.89,.27,.01,.07,.74,.95,.55,.48,.71,.03,.15,.14,.31,.01,.34,.74,.08,.1,.93,.77,.29,0,.63,.11,.11,.16,.2,.17,.92,.76,.08,.09,.12,.92,.18,.92,.93,.02,.95,.73,.2,.81,.81,.25,.11,0,.91,.63,.14,.01,.23,.6,.09,.12,.21,.54,0,.56,.01,.04,.54,0,.89,.56,.56,.15,.38,.01,.04,.08,.08,.51,.36,.01,.04,.25,.28,.32,.37,.13,.43,.04,.07,.96,0,.12,.86,0,.02,.03,.03,0,0,.24,.23,.82,.06,.09,.2,.06,.02,.43,.23,.52,.04,.28,.86,.96,.62,.05,.16,.2,.53,.81,.55,.07,.16,.88,.49,.45,.81,.21,.09,.97,.9,.08,0,.19,.09,.28,.04,.22,.23,.12,.54,.37,.91,.05,.01,0,0,.69,.02,.79,.65,.44,.06,.01,.06,.75,.1,.01,.18,.52,.45,0,.13,.01,.73,.21,.28,.47,.15,.23,.43,.32,.79,.81,.05,.01,.06,.02,.35,.45,.06,.01,.2,.38,.33,0,.38,.14,.11,.63,0,.91,.42,.38,.47,0,.71,.03,.72,.09,.05,.06,.12,.12,.32,.02,.03,.39,.08,.5,.82,.16,.05,.3,.4,.97,.14,0,0,.52,.87,.17,.3,.18,.05,.74,.25,.17,.16,.32,.23,.28,.89,.35,.03,.41,.9,.21,.04,.29,.06,.96,.02,.5,.3,.26,.07,.22,.18,.42,.01,.56,.04,.19,.95,.12,.61,.52,.02,.28,.7,.39,.36,.47,.03,.01,.03,.04,.27,.03,.19,.01,.01,.02,.12,.8,.96,.01,.08,.01,0,.01,.07,.19,.14,.88,.37,.01,.14,.08,.17,.68,.98,.68,.55,.22,.02,.33,.4,.07,.11,.02,.06,.9,.01,.29,.05,.53,.15,.11,.77,0,.74,.01,.61,.97,.24,.14,.98,.35,.13,.01,.62,.03,.4,.04,.11,.03,.05,.98,.05,.07,.08,0,.46,.81,.4,.19,.18,.19,.27,.08,.64,.86,.23,.31,.09,.18,.03,.93,.78,.91,.07,.49,.36,.15,.56,.85,.04,.25,.1,.91,.67,.06,.81,0,.2,.6,.53,.76,.57,0,.05,.17,.37,.54,.5,.16,.44,.49,.64,.64,.99,.08,.04,.07,.1,.11,.03,.01,.25,.52,.92,.24,.27,.4,.21,.39,.77,.02,.01,0,.11,0,.52,.84,.15,.37,.97,.54,.11,.18,.4,.85,.7,.59,.01,.19,.06,.3,.79,.68,.81,.22,.16,.01,.8,.09,.23,.23,.96,.29,.06,.43,.31,.62,.35,.77,.42,.79,.48,.14,.89,.03,.39,.29,.69,.75,.15,.21,.17,.03,.11,.49,.41,.76,.32,.17,.05,.89,.63,.03,.06,.31,.94,.07,.07,.34,.01,.37,.52,.12,.18,.63,.77,.9,.45,.95,.88,.01,.17,.83,.29,.56,.02,.19,.07,.02,.59,.03,.72,.17,0,.02,.38,.55,.62,.01,.34,.03,.1,.42,.46,.12,.93,.34,.35,.58,.24,.23,.17,.42,.71,.01,0,.05,.09,.05,.2,.04,.28,.17,.29,.04,.64,.77,.81,.52,.88,.36,.71,.83,.49,.6,.42,.66,.11,.96,.14,.69,.33,.01,.44,.63,0,.84,.02,.1,.08,.43,.45,.03,.31,.01,.13,.22,0,.5,.67,.58,.09,.1,.3,.02,.65,.27,.13,.84,.02,.81,.52,.01,.1,.27,.27,.57,.01,.6,.4,.35,.24,.08,.01,.04,.59,.07,.24,.02,.22,.02,.84,.11,.15,.93,.16,.01,.59,.33,.21,.62,.82,.09,.28,.46,.12,.03,.83,.61,.11,.02,.71,.47,.12,.02,.77,.63,.3,.06,.26,.3,.05,.16,.87,.17,.02,.68,.38,.23,0,.86,.27,.72,.06,.38,.09,.01,.05,.51,.16,0,.01,.06,.07,.03,.41,.16,.04,.01,.14,.14,.59,.01,.18,.01,.37,.01,.05,.43,.34,0,.07,.21,0,.01,.01,.17,.57,.03,.98,.01,0,0,.45,.02,.09,.67,.01,.05,.16,.02,.01,.02,.84,.38,.08,.53,.36,.49,.27,.03,0,.59,.02,.99,.41,.01,.72,.48,.24,.74,.22,0,.28,.92,.84,.98,.06,.81,.09,.29,.03,.49,.58,.72,.67,.1,.77,.53,1,.06,.14,0,.66,.09,.91,.54,.02,.66,.01,.47,.09,.11,.39,.02,.18,.14,.47,.18,.03,.39,.8,.23,.47,.11,.46,.14,.56,.96,.66,.38,.09,.04,0,.06,1,.01,.34,.02,.01,.87,.04,.43,.11,.61,.02,.03,0,0,0,.16,0,.02,.01,.02,0,.09,0,.04,.01,.02,0,.77,.04,.02,.65,.39,.78,.05,.12,.56,.29,.07,.92,.05,.8,.03,.01,.37,.14,.84,.88,.02,.44,.96,.59,.9,.65,.66,.02,0,.08,.22,.08,.52,.22,.42,.72,.06,.09,.01,.02,.06,.15,.65,0,.42,.01,.26,.3,.09,.25,.06,.41,.44,.21,.25,.37,.47,.11,.48,.07,.33,.47,0,.11,.04,.05,.59,.68,.47,.84,.91,.11,.04,.38,.86,.78,.71,.87,.13,.1,.17,.5,.19,.01,.08,.01,.95,.6,.97,.06,.77,.04,0,.02,.75,.32,.23,.31,.89,.12,.03,.97,.06,.72,.04,0,.45,.15,.3,.17,.14,.72,.45,.11,.87,.79,.01,.02,.24,0,.87,.05,.3,.01,.07,.03,.11,.19,.3,.09,0,.42,.05,.99,.09,.01,.42,.79,.83,0,.69,.02,.5,.22,.22,.08,.08,.1,.21,.05,.97,.04,.01,0,.11,.52,.13,.19,.18,.3,.67,.05,.97,.27,0,.05,.05,.31,.86,.35,.21,.18,.12,.53,.04,.02,.15,.94,.03,.58,.17,.06,.02,.08,.43,.65,.13,.47,.63,.46,.02,.61,.23,.39,.1,.01,.01,.22,.48,.06,.18,.51,.23,.33,.69,.02,.15,.72,.85,.2,.29,.31,.3,.64,.47,.19,.7,.16,.61,.05,.11,.23,.52,.22,.91,.17,.46,.27,.03,.2,.82,.11,.16,.01,.16,.9,.75,.04,.01,.57,.29,.66,.01,.06,.15,.18,.18,.56,.1,.66,.7,.12,.14,.68,.85,.17,.55,.98,.18,.29,.25,.28,.65,.29,.27,.08,.59,.02,.31,.65,.41,.09,.8,.42,.99,.07,.88,0,.65,.58,.57,.13,.01,.07,.62,.57,.18,.73,.52,.36,.76,0,.36,.08,.03,.47,.25,.09,.58,0,.24,.03,.91,.97,.17,.78,.17,.04,.12,.08,.1,.38,.12,0,.43,.03,.59,.11,.74,.53,.84,.05,.77,.02,.84,.15,.08,0,.99,.07,.17,.76,.04,.32,0,.56,.02,.23,.62,.18,.56,.59,.38,.86,.32,.27,.02,0,.13,0,.96,.13,.02,.08,.99,.34,.76,.88,.17,0,.01,0,.21,.43,.02,.3,.32,.36,.07,.31,.04,.08,.03,.16,.05,.62,.94,.16,.47,.85,.13,.04,.01,.51,.88,.36,.35,.73,.55,.55,.38,.1,.1,.21,.19,0,.32,.53,0,.04,.41,.74,.89,.22,.55,.58,.08,.57,.47,.02,.77,.2,.63,.11,.13,.19,.09,0,.03,.83,.07,.71,.66,0,.47,.62,.05,.26,.02,0,.03,.34,.38,.92,.17,.09,.37,.02,.47,.34,.84,.23,.08,.82,.01,0,.54,.74,.39,.54,.4,.71,.83,.97,.11,.2,.05,.99,.28,.38,0,.16,.55,.4,.19,.46,.19,.1,.14,.4,.05,.48,.01,.05,.97,.02,.01,.44,.01,0,.91,.55,.34,.73,.02,.23,0,.57,.55,.17,.52,.36,.36,.92,0,.97,.44,.01,.58,.83,.22,0,.24,0,.06,.06,.24,.39,.11,.58,.98,.24,.73,.25,.86,0,.97,.52,.1,.01,.87,.38,.79,.39,.78,.18,.01,0,.38,.49,.18,.69,.25,.06,.03,.96,.02,.02,.77,.85,.71,.02,.34,.03,.01,.42,.26,.46,.63,.07,.01,.19,.95,.86,.04,.19,.46,.16,.72,.09,.45,.92,.13,.8,.42,.95,.96,.72,.04];export{a as pvalData};
